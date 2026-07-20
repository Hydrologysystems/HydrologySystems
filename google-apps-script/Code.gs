/**
 * Google Apps Script Booking System
 * File: Code.gs
 * Description: Router for GET and POST web endpoints.
 * 
 * @license Apache-2.0
 */

// Global constant for sheet names
var SHEET_BOOKINGS = "Bookings";
var SHEET_STAFF = "Staff";
var SHEET_CUSTOMERS = "Customers";

/**
 * Handle GET requests
 * Endpoints:
 * - action=getStaffList
 * - action=getAvailability&staff=X&date=YYYY-MM-DD&duration=30
 */
function doGet(e) {
  try {
    var action = e.parameter.action;
    if (!action) {
      return jsonResponse({ success: false, error: "Missing parameter: action" });
    }

    if (action === "getStaffList") {
      var staffList = getStaffListFromSheet();
      return jsonResponse({ success: true, data: staffList });
    } 
    
    if (action === "getAvailability") {
      var staffName = e.parameter.staff;
      var dateStr = e.parameter.date; // YYYY-MM-DD
      var duration = parseInt(e.parameter.duration || "30", 10);

      if (!staffName || !dateStr) {
        return jsonResponse({ success: false, error: "Missing required parameters for availability" });
      }

      var slots = findOpenTimeSlots(staffName, dateStr, duration);
      return jsonResponse({ success: true, data: slots });
    }

    return jsonResponse({ success: false, error: "Unknown GET action: " + action });
  } catch (err) {
    return jsonResponse({ success: false, error: "GET Error: " + err.toString() });
  }
}

/**
 * Handle POST requests
 * Endpoints:
 * - action=createBooking (payload in request body or query param)
 * - action=cancelBooking (payload in request body or query param)
 */
function doPost(e) {
  // Use Apps Script LockService to prevent race conditions across concurrent postings
  var lock = LockService.getScriptLock();
  try {
    // Attempt to acquire lock for up to 30 seconds
    if (!lock.tryLock(30000)) {
      return jsonResponse({ success: false, error: "Server busy, please try booking again in a moment." });
    }

    var action = e.parameter.action;
    var postData = {};

    // Parse JSON payload if present
    if (e.postData && e.postData.contents) {
      try {
        postData = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        // Fallback to form parameters
      }
    }

    // Merge parameters from query string and post body
    var params = Object.assign({}, e.parameter, postData);
    action = params.action || action;

    if (!action) {
      return jsonResponse({ success: false, error: "Missing action parameter" });
    }

    if (action === "createBooking") {
      var result = createBookingService(params);
      return jsonResponse(result);
    }

    if (action === "cancelBooking") {
      var cancelResult = cancelBookingService(params.bookingId);
      return jsonResponse(cancelResult);
    }

    return jsonResponse({ success: false, error: "Unknown POST action: " + action });
  } catch (err) {
    return jsonResponse({ success: false, error: "POST Error: " + err.toString() });
  } finally {
    // Always release the lock
    lock.releaseLock();
  }
}

/**
 * Helper to build CORS-compliant JSON responses in Google Apps Script.
 * Google Apps Script web apps automatically redirect, and returning JSON using
 * ContentService.MimeType.JSON allows external fetch() calls from other origins.
 */
function jsonResponse(data) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
