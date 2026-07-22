/**
 * Google Apps Script Booking System
 * File: AvailabilityService.gs
 * Description: Working hours, calendar lookups, and slot availability computations.
 * 
 * @license Apache-2.0
 */

/**
 * Retrieves the list of configured staff members.
 * Initializes defaults in the Sheet if the sheet is empty or newly created.
 * @return {Array<Object>} List of staff names and their metadata.
 */
function getStaffListFromSheet() {
  var sheet = getOrCreateSheet(SHEET_STAFF);
  var data = sheet.getDataRange().getValues();
  
  // If the sheet has only headers or is empty, initialize default staff members
  if (data.length <= 1) {
    var defaultStaff = [
      ["Sarah Jenkins", "primary", "09:00", "17:00"],
      ["Marcus Chen", "primary", "08:30", "16:30"],
      ["Elena Rostova", "primary", "10:00", "18:00"]
    ];
    
    // Write defaults
    for (var i = 0; i < defaultStaff.length; i++) {
      sheet.appendRow(defaultStaff[i]);
    }
    
    // Re-read data
    data = sheet.getDataRange().getValues();
  }

  var staffList = [];
  for (var i = 1; i < data.length; i++) {
    staffList.push({
      name: data[i][0],
      calendarId: data[i][1],
      startHour: data[i][2],
      endHour: data[i][3]
    });
  }
  return staffList;
}

/**
 * Gets a staff member's working config by name.
 * @param {string} staffName - Name of the staff member.
 * @return {Object|null} Staff config or null if not found.
 */
function getStaffConfig(staffName) {
  var list = getStaffListFromSheet();
  for (var i = 0; i < list.length; i++) {
    if (list[i].name.toLowerCase() === staffName.toLowerCase()) {
      return list[i];
    }
  }
  return null;
}

/**
 * Finds all open time slots for a specific staff member and date.
 * @param {string} staffName - Staff member name.
 * @param {string} dateStr - Date string (YYYY-MM-DD).
 * @param {number} durationMinutes - Slot duration in minutes.
 * @return {Array<Object>} List of open slots with HH:MM strings.
 */
function findOpenTimeSlots(staffName, dateStr, durationMinutes) {
  var staffConfig = getStaffConfig(staffName);
  if (!staffConfig) {
    return [];
  }

  // 1. Determine working hours limits
  var startHourParts = staffConfig.startHour.split(":");
  var endHourParts = staffConfig.endHour.split(":");
  
  var workStartHour = parseInt(startHourParts[0] || "9", 10);
  var workStartMin = parseInt(startHourParts[1] || "0", 10);
  var workEndHour = parseInt(endHourParts[0] || "17", 10);
  var workEndMin = parseInt(endHourParts[1] || "0", 10);

  // Initialize bounds for the given day
  var dayStart = parseDateTimeString(dateStr, staffConfig.startHour);
  var dayEnd = parseDateTimeString(dateStr, staffConfig.endHour);

  // 2. Fetch occupied intervals from Google Calendar
  var occupiedIntervals = [];
  try {
    var calendarId = staffConfig.calendarId || "primary";
    var calendar = CalendarApp.getCalendarById(calendarId) || CalendarApp.getDefaultCalendar();
    
    if (calendar) {
      // Buffer search slightly to catch overlapping boundaries
      var events = calendar.getEvents(dayStart, dayEnd);
      for (var i = 0; i < events.length; i++) {
        var ev = events[i];
        if (!ev.isAllDayEvent()) {
          occupiedIntervals.push({
            start: ev.getStartTime().getTime(),
            end: ev.getEndTime().getTime()
          });
        }
      }
    }
  } catch (calErr) {
    Logger.log("Failed to query Calendar in findOpenTimeSlots: " + calErr.toString());
  }

  // 3. Fetch occupied intervals from the Bookings spreadsheet (covers race conditions / sync delay)
  try {
    var sheet = getOrCreateSheet(SHEET_BOOKINGS);
    var data = sheet.getDataRange().getValues();
    for (var j = 1; j < data.length; j++) {
      var row = data[j];
      var rowStaff = row[1];
      var rowDate = row[6]; // YYYY-MM-DD
      var rowStatus = row[9]; // Confirmed / Cancelled
      
      if (rowStaff === staffName && rowDate === dateStr && rowStatus === "Confirmed") {
        var rowStart = parseDateTimeString(dateStr, row[7]); // row[7] is Start Time (HH:MM)
        var rowEnd = parseDateTimeString(dateStr, row[8]);   // row[8] is End Time (HH:MM)
        occupiedIntervals.push({
          start: rowStart.getTime(),
          end: rowEnd.getTime()
        });
      }
    }
  } catch (sheetErr) {
    Logger.log("Failed to query Sheet in findOpenTimeSlots: " + sheetErr.toString());
  }

  // 4. Generate candidate slots every 30 minutes inside working hours
  var slots = [];
  var now = new Date();
  
  var currentPointer = new Date(dayStart.getTime());
  var durationMs = durationMinutes * 60 * 1000;
  
  while (currentPointer.getTime() + durationMs <= dayEnd.getTime()) {
    var slotStart = new Date(currentPointer.getTime());
    var slotEnd = new Date(currentPointer.getTime() + durationMs);

    var isPast = slotStart.getTime() <= now.getTime();
    var isOverlapping = false;

    if (!isPast) {
      // Check overlaps with occupied intervals
      for (var k = 0; k < occupiedIntervals.length; k++) {
        var occ = occupiedIntervals[k];
        // Overlap exists if slotStart < occ.end AND slotEnd > occ.start
        if (slotStart.getTime() < occ.end && slotEnd.getTime() > occ.start) {
          isOverlapping = true;
          break;
        }
      }
    }

    if (!isPast && !isOverlapping) {
      slots.push({
        startTime: formatTimeHHMM(slotStart),
        endTime: formatTimeHHMM(slotEnd)
      });
    }

    // Advance pointer by 30 minutes for overlapping grid options (gives granular selection)
    currentPointer.setTime(currentPointer.getTime() + 30 * 60 * 1000);
  }

  return slots;
}

/**
 * Checks if a specific start and end time interval is still completely available.
 * @return {boolean} True if the slot is free.
 */
function checkSpecificSlotAvailability(staffName, dateStr, startDateTime, endDateTime) {
  var staffConfig = getStaffConfig(staffName);
  if (!staffConfig) return false;

  var requestStartMs = startDateTime.getTime();
  var requestEndMs = endDateTime.getTime();

  // 1. Check against Calendar
  try {
    var calendarId = staffConfig.calendarId || "primary";
    var calendar = CalendarApp.getCalendarById(calendarId) || CalendarApp.getDefaultCalendar();
    if (calendar) {
      var events = calendar.getEvents(startDateTime, endDateTime);
      for (var i = 0; i < events.length; i++) {
        var ev = events[i];
        if (!ev.isAllDayEvent()) {
          var evStart = ev.getStartTime().getTime();
          var evEnd = ev.getEndTime().getTime();
          if (requestStartMs < evEnd && requestEndMs > evStart) {
            return false; // overlap found
          }
        }
      }
    }
  } catch (err) {
    Logger.log("Calendar query error in checkSpecificSlotAvailability: " + err.toString());
  }

  // 2. Check against Sheet entries
  try {
    var sheet = getOrCreateSheet(SHEET_BOOKINGS);
    var data = sheet.getDataRange().getValues();
    for (var j = 1; j < data.length; j++) {
      var row = data[j];
      var rowStaff = row[1];
      var rowDate = row[6];
      var rowStatus = row[9];
      
      if (rowStaff === staffName && rowDate === dateStr && rowStatus === "Confirmed") {
        var rowStartMs = parseDateTimeString(dateStr, row[7]).getTime();
        var rowEndMs = parseDateTimeString(dateStr, row[8]).getTime();
        
        if (requestStartMs < rowEndMs && requestEndMs > rowStartMs) {
          return false; // overlap found
        }
      }
    }
  } catch (err) {
    Logger.log("Sheet query error in checkSpecificSlotAvailability: " + err.toString());
  }

  return true;
}

/**
 * Converts a dateStr (YYYY-MM-DD) and timeStr (HH:MM) into a local JavaScript Date object.
 */
function parseDateTimeString(dateStr, timeStr) {
  var dateParts = dateStr.split("-"); // [YYYY, MM, DD]
  var timeParts = timeStr.split(":"); // [HH, MM]
  
  var year = parseInt(dateParts[0], 10);
  var month = parseInt(dateParts[1], 10) - 1; // 0-based index
  var day = parseInt(dateParts[2], 10);
  var hour = parseInt(timeParts[0], 10);
  var minute = parseInt(timeParts[1], 10);
  
  return new Date(year, month, day, hour, minute, 0, 0);
}

/**
 * Formats a Date object as HH:MM.
 */
function formatTimeHHMM(date) {
  var hours = date.getHours().toString();
  var minutes = date.getMinutes().toString();
  if (hours.length < 2) hours = "0" + hours;
  if (minutes.length < 2) minutes = "0" + minutes;
  return hours + ":" + minutes;
}
