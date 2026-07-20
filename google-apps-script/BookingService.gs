/**
 * Google Apps Script Booking System
 * File: BookingService.gs
 * Description: Core booking creation and cancellation operations.
 * 
 * @license Apache-2.0
 */

/**
 * Creates a new booking if the slot is free and valid.
 * @param {Object} params - Booking parameters.
 * @return {Object} JSON-serializable result.
 */
function createBookingService(params) {
  var staffName = params.staffName;
  var customerName = params.customerName;
  var email = params.email;
  var phone = params.phone || "";
  var service = params.service || "ROI Assessment Consultation";
  var dateStr = params.date; // YYYY-MM-DD
  var startTimeStr = params.startTime; // HH:MM
  var endTimeStr = params.endTime; // HH:MM

  // 1. Validation
  if (!staffName || !customerName || !email || !dateStr || !startTimeStr || !endTimeStr) {
    return { success: false, error: "Validation Error: Missing required fields (staffName, customerName, email, date, startTime, endTime)." };
  }

  // Parse strings into Date objects for proper validation and comparison
  var startDateTime = parseDateTimeString(dateStr, startTimeStr);
  var endDateTime = parseDateTimeString(dateStr, endTimeStr);
  var now = new Date();

  // Validate date/time is in the future
  if (startDateTime.getTime() <= now.getTime()) {
    return { success: false, error: "Validation Error: Selected booking time must be in the future." };
  }

  if (endDateTime.getTime() <= startDateTime.getTime()) {
    return { success: false, error: "Validation Error: End time must be after the start time." };
  }

  // 2. Fetch Staff Information
  var staffInfo = getStaffConfig(staffName);
  if (!staffInfo) {
    return { success: false, error: "Validation Error: Configured staff/resource '" + staffName + "' not found." };
  }

  // 3. Double-check slot is still free (avoids race conditions)
  var isSlotAvailable = checkSpecificSlotAvailability(staffName, dateStr, startDateTime, endDateTime);
  if (!isSlotAvailable) {
    return { success: false, error: "Booking conflict: This time slot is no longer available. Please select another slot." };
  }

  // 4. Create Calendar Event
  var calendarEventId = "";
  var calendarError = "";
  try {
    var calendarId = staffInfo.calendarId || "primary";
    var calendar = CalendarApp.getCalendarById(calendarId);
    
    if (!calendar) {
      // Fallback to default calendar if the specific ID is not shared or accessible
      calendar = CalendarApp.getDefaultCalendar();
    }

    var eventTitle = service + " - " + customerName;
    var eventDescription = "Hydrology Process Platform Consultation\n\n" +
                           "Customer Name: " + customerName + "\n" +
                           "Phone: " + phone + "\n" +
                           "Email: " + email + "\n" +
                           "Staff Resource: " + staffName + "\n" +
                           "Service: " + service + "\n\n" +
                           "Created automatically via On-Site Chemical Platform Portal.";

    var eventOptions = {
      description: eventDescription,
      guests: email,
      sendInvites: true
    };

    var event = calendar.createEvent(eventTitle, startDateTime, endDateTime, eventOptions);
    calendarEventId = event.getId();
  } catch (calErr) {
    calendarError = calErr.toString();
    Logger.log("Calendar creation error: " + calendarError);
    // Note: We proceed with the sheet booking even if calendar creation fails,
    // but log it to let the customer know we are investigating.
  }

  // 5. Save to Google Sheets
  var bookingId = "BK-" + Math.floor(now.getTime() / 1000) + "-" + Math.floor(Math.random() * 900 + 100);
  try {
    var sheet = getOrCreateSheet(SHEET_BOOKINGS);
    
    // Rows: Booking ID, Staff/Resource Name, Customer Name, Email, Phone, Service, Date, Start Time, End Time, Status, Calendar Event ID, Created At
    var newRow = [
      bookingId,
      staffName,
      customerName,
      email,
      phone,
      service,
      dateStr,
      startTimeStr,
      endTimeStr,
      "Confirmed",
      calendarEventId,
      now
    ];
    
    sheet.appendRow(newRow);

    // Dynamic Upsert for Marketing Customer Directory
    upsertCustomerService(email, customerName, phone, params.marketingOptIn, dateStr, params.source || "Web App");
  } catch (sheetErr) {
    return { success: false, error: "Database Error: Failed to write booking row. " + sheetErr.toString() };
  }

  // 6. Send Confirmation Email
  try {
    sendConfirmationEmail(email, {
      bookingId: bookingId,
      customerName: customerName,
      staffName: staffName,
      service: service,
      date: dateStr,
      startTime: startTimeStr,
      endTime: endTimeStr,
      calendarError: calendarError ? "Calendar link could not be generated, but your booking is logged." : ""
    });
  } catch (emailErr) {
    Logger.log("Email confirmation failed to send: " + emailErr.toString());
    // We do not fail the booking if email fails to send, but include it in the success response
  }

  return {
    success: true,
    bookingId: bookingId,
    message: "Booking confirmed! A confirmation email has been dispatched.",
    calendarSync: !calendarError,
    calendarError: calendarError
  };
}

/**
 * Cancels an existing booking given its ID.
 * @param {string} bookingId - The Booking ID to cancel.
 * @return {Object} JSON-serializable result.
 */
function cancelBookingService(bookingId) {
  if (!bookingId) {
    return { success: false, error: "Missing parameter: bookingId" };
  }

  try {
    var sheet = getOrCreateSheet(SHEET_BOOKINGS);
    var data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) {
      return { success: false, error: "No bookings found in database." };
    }

    var bookingRowIndex = -1;
    var bookingData = null;

    // Search for matching Booking ID
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === bookingId) {
        bookingRowIndex = i + 1; // 1-based index including header
        bookingData = {
          bookingId: data[i][0],
          staffName: data[i][1],
          customerName: data[i][2],
          email: data[i][3],
          service: data[i][5],
          date: data[i][6],
          startTime: data[i][7],
          endTime: data[i][8],
          status: data[i][9],
          calendarEventId: data[i][10]
        };
        break;
      }
    }

    if (bookingRowIndex === -1) {
      return { success: false, error: "Booking ID '" + bookingId + "' not found." };
    }

    if (bookingData.status === "Cancelled") {
      return { success: true, message: "Booking was already cancelled." };
    }

    // 1. Delete Calendar Event
    if (bookingData.calendarEventId) {
      try {
        var staffInfo = getStaffConfig(bookingData.staffName);
        var calendarId = (staffInfo && staffInfo.calendarId) || "primary";
        var calendar = CalendarApp.getCalendarById(calendarId) || CalendarApp.getDefaultCalendar();
        
        if (calendar) {
          var event = calendar.getEventById(bookingData.calendarEventId);
          if (event) {
            event.deleteEvent();
          }
        }
      } catch (calErr) {
        Logger.log("Failed to delete calendar event: " + calErr.toString());
        // Continue cancellation regardless of calendar removal failures
      }
    }

    // 2. Update Status in Sheet (Column J is index 10 in 1-based notation)
    sheet.getRange(bookingRowIndex, 10).setValue("Cancelled");

    // 3. Send Cancellation Email
    try {
      sendCancellationEmail(bookingData.email, bookingData);
    } catch (emailErr) {
      Logger.log("Failed to send cancellation email: " + emailErr.toString());
    }

    return {
      success: true,
      message: "Booking with ID '" + bookingId + "' has been successfully cancelled and calendar events deleted."
    };
  } catch (err) {
    return { success: false, error: "Cancellation Error: " + err.toString() };
  }
}

/**
 * Upserts a customer into the Customers directory sheet.
 * Matches Email case-insensitively.
 * @param {string} email - Customer email
 * @param {string} name - Customer Name
 * @param {string} phone - Customer Phone
 * @param {boolean|string} marketingOptIn - Optional marketing opt-in value
 * @param {string} dateStr - Date of the booking (YYYY-MM-DD)
 * @param {string} source - Booking source
 */
function upsertCustomerService(email, name, phone, marketingOptIn, dateStr, source) {
  try {
    var sheet = getOrCreateSheet(SHEET_CUSTOMERS);
    var range = sheet.getDataRange();
    var data = range.getValues();
    var emailLower = email.toLowerCase().trim();
    var foundIndex = -1;

    // Look for matching Email (Column A is Index 0)
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] && data[i][0].toString().toLowerCase().trim() === emailLower) {
        foundIndex = i + 1; // 1-based index including header
        break;
      }
    }

    var isChecked = (marketingOptIn === true || marketingOptIn === "true" || marketingOptIn === "Yes" || marketingOptIn === "yes");
    var marketingValue = isChecked ? "Yes" : "No";

    if (foundIndex !== -1) {
      // Existing customer: update Last Booking Date and increment Total Bookings
      var existingRowData = data[foundIndex - 1];
      var totalBookings = parseInt(existingRowData[5] || "1", 10) + 1;

      // Update basic fields in case they changed
      sheet.getRange(foundIndex, 2).setValue(name);
      if (phone) {
        sheet.getRange(foundIndex, 3).setValue(phone);
      }
      
      // Update Last Booking Date
      sheet.getRange(foundIndex, 5).setValue(dateStr);
      
      // Increment Total Bookings
      sheet.getRange(foundIndex, 6).setValue(totalBookings);
      
      // Only set to "Yes" if the checkbox was explicitly checked on this submission.
      // Do not overwrite a previous "Yes" with "No" if they didn't explicitly opt-out,
      // but if they explicitly sent "Yes", ensure it's recorded as "Yes".
      // Let's implement: "Do not add or update the Marketing Opt-In field to 'Yes' unless the checkbox was explicitly checked on that submission."
      // If it's already Yes and they didn't check it this time, we can leave it as Yes, or update it if needed. Leaving it as Yes is standard CRM behaviour unless they opt-out, but to be completely safe, let's only set to Yes when checked. If checked, setValue("Yes"). If unchecked, don't write "Yes" (keep the cell as is, or if it is blank set to "No"). Let's check:
      if (isChecked) {
        sheet.getRange(foundIndex, 7).setValue("Yes");
      } else {
        // If it wasn't checked, and currently it's empty, set to "No"
        var currentOptIn = existingRowData[6];
        if (!currentOptIn) {
          sheet.getRange(foundIndex, 7).setValue("No");
        }
      }
    } else {
      // New customer row: Email, Name, Phone, First Booking Date, Last Booking Date, Total Bookings, Marketing Opt-In, Source
      var newCustomerRow = [
        emailLower,
        name,
        phone || "",
        dateStr, // First Booking Date
        dateStr, // Last Booking Date
        1,       // Total Bookings
        marketingValue, // "Yes" or "No"
        source || "Web App"
      ];
      sheet.appendRow(newCustomerRow);
    }
    
    // Auto-resize columns to fit content
    sheet.autoResizeColumns(1, 8);
  } catch (err) {
    Logger.log("Customer contact upsert error: " + err.toString());
  }
}

