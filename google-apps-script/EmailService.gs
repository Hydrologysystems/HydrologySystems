/**
 * Google Apps Script Booking System
 * File: EmailService.gs
 * Description: Formats and dispatches elegant booking confirmation and cancellation emails.
 * 
 * @license Apache-2.0
 */

/**
 * Sends a clean confirmation email to the user.
 * @param {string} recipientEmail - Email address of the customer.
 * @param {Object} details - Booking summary details.
 */
function sendConfirmationEmail(recipientEmail, details) {
  var subject = "Confirmed: " + details.service + " with " + details.staffName;
  
  var htmlBody = 
    "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;'>" +
      "<h2 style='color: #0d9488; margin-top: 0;'>Booking Confirmed!</h2>" +
      "<p>Dear <strong>" + details.customerName + "</strong>,</p>" +
      "<p>Your consultation booking with Hydrology Systems is successfully secured. Below are your booking details:</p>" +
      
      "<table style='width: 100%; border-collapse: collapse; margin: 20px 0;'>" +
        "<tr>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;'><strong>Booking ID:</strong></td>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;'>" + details.bookingId + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;'><strong>Expert Consultant:</strong></td>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;'>" + details.staffName + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;'><strong>Service Type:</strong></td>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;'>" + details.service + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;'><strong>Date:</strong></td>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;'>" + details.date + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;'><strong>Time Slot:</strong></td>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;'>" + details.startTime + " - " + details.endTime + " (Local Time)</td>" +
        "</tr>" +
      "</table>" +
      
      (details.calendarError ? "<p style='color: #ea580c; font-size: 13px;'>* " + details.calendarError + "</p>" : "") +
      
      "<div style='margin-top: 30px; padding-top: 15px; border-top: 1px solid #edf2f7; font-size: 12px; color: #718096; text-align: center;'>" +
        "Need to make changes? Contact us or submit a cancellation request using your Booking ID.<br />" +
        "<strong>Hydrology Systems pH Control Platform</strong>" +
      "</div>" +
    "</div>";

  var textBody = 
    "Booking Confirmed!\n\n" +
    "Dear " + details.customerName + ",\n\n" +
    "Your consultation booking has been secured.\n\n" +
    "Booking ID: " + details.bookingId + "\n" +
    "Expert Consultant: " + details.staffName + "\n" +
    "Service Type: " + details.service + "\n" +
    "Date: " + details.date + "\n" +
    "Time Slot: " + details.startTime + " - " + details.endTime + "\n\n" +
    "Thank you,\nHydrology Systems Team";

  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    htmlBody: htmlBody,
    body: textBody
  });
}

/**
 * Sends a cancellation email to the user.
 * @param {string} recipientEmail - Email address of the customer.
 * @param {Object} details - Booking cancellation details.
 */
function sendCancellationEmail(recipientEmail, details) {
  var subject = "Cancelled: Consultation with " + details.staffName;
  
  var htmlBody = 
    "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;'>" +
      "<h2 style='color: #dc2626; margin-top: 0;'>Booking Cancelled</h2>" +
      "<p>Dear <strong>" + details.customerName + "</strong>,</p>" +
      "<p>This email confirms that your scheduled booking has been cancelled at your request. Any associated calendar events have been deleted.</p>" +
      
      "<table style='width: 100%; border-collapse: collapse; margin: 20px 0;'>" +
        "<tr>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;'><strong>Booking ID:</strong></td>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;'>" + details.bookingId + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;'><strong>Consultant:</strong></td>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;'>" + details.staffName + "</td>" +
        "</tr>" +
        "<tr>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #4a5568;'><strong>Original Date:</strong></td>" +
          "<td style='padding: 8px 0; border-bottom: 1px solid #edf2f7; color: #1a202c;'>" + details.date + "</td>" +
        "</tr>" +
      "</table>" +
      
      "<p>You are welcome to schedule a new consultation with any of our experts at your convenience.</p>" +
      
      "<div style='margin-top: 30px; padding-top: 15px; border-top: 1px solid #edf2f7; font-size: 12px; color: #718096; text-align: center;'>" +
        "<strong>Hydrology Systems pH Control Platform</strong>" +
      "</div>" +
    "</div>";

  var textBody = 
    "Booking Cancelled\n\n" +
    "Dear " + details.customerName + ",\n\n" +
    "This email confirms that your booking (ID: " + details.bookingId + ") has been successfully cancelled.\n\n" +
    "Thank you,\nHydrology Systems Team";

  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    htmlBody: htmlBody,
    body: textBody
  });
}
