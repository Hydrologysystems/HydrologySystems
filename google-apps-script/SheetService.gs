/**
 * Google Apps Script Booking System
 * File: SheetService.gs
 * Description: Low-level Spreadsheet initialization and querying helper functions.
 * 
 * @license Apache-2.0
 */

/**
 * Accesses the active spreadsheet (for container-bound scripts) or locates/creates 
 * a dedicated standalone spreadsheet using ScriptProperties.
 * @return {GoogleAppsScript.Spreadsheet.Spreadsheet} The Spreadsheet object.
 */
function getActiveSpreadsheet() {
  var ss = null;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  } catch (err) {
    // Silent catch, script might be running as standalone Web App
  }

  if (ss) {
    return ss;
  }

  // Standalone mode: Look for an existing stored Spreadsheet ID in Script Properties
  var userProperties = PropertiesService.getScriptProperties();
  var savedId = userProperties.getProperty("SPREADSHEET_ID");

  if (savedId) {
    try {
      return SpreadsheetApp.openById(savedId);
    } catch (openErr) {
      Logger.log("Failed to open saved Spreadsheet ID. Creating a new one...");
    }
  }

  // Create a brand new Spreadsheet in Google Drive if none exists
  var newSs = SpreadsheetApp.create("Hydrology Systems Booking Database");
  userProperties.setProperty("SPREADSHEET_ID", newSs.getId());
  Logger.log("Created brand new spreadsheet database: " + newSs.getUrl());
  return newSs;
}

/**
 * Returns a sheet by name. If the sheet does not exist, it is created with proper headers.
 * @param {string} sheetName - "Bookings" or "Staff".
 * @return {GoogleAppsScript.Spreadsheet.Sheet} The sheet object.
 */
function getOrCreateSheet(sheetName) {
  var ss = getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName);

  if (sheet) {
    return sheet;
  }

  // Create sheet since it doesn't exist
  sheet = ss.insertSheet(sheetName);
  
  // Initialize Headers
  if (sheetName === SHEET_BOOKINGS) {
    var bookingsHeaders = [
      "Booking ID", 
      "Staff/Resource Name", 
      "Customer Name", 
      "Email", 
      "Phone", 
      "Service", 
      "Date", 
      "Start Time", 
      "End Time", 
      "Status", 
      "Calendar Event ID", 
      "Created At"
    ];
    sheet.appendRow(bookingsHeaders);
    sheet.setFrozenRows(1);
    
    // Auto-adjust column widths for readability
    sheet.autoResizeColumns(1, bookingsHeaders.length);
  } else if (sheetName === SHEET_STAFF) {
    var staffHeaders = [
      "Staff Name", 
      "Google Calendar ID", 
      "Start Hour (HH:MM)", 
      "End Hour (HH:MM)"
    ];
    sheet.appendRow(staffHeaders);
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, staffHeaders.length);
  } else if (sheetName === SHEET_CUSTOMERS) {
    var customerHeaders = [
      "Email",
      "Name",
      "Phone",
      "First Booking Date",
      "Last Booking Date",
      "Total Bookings",
      "Marketing Opt-In",
      "Source"
    ];
    sheet.appendRow(customerHeaders);
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, customerHeaders.length);
  }

  return sheet;
}
