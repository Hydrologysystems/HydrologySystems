# Google Apps Script Booking Backend - Setup Guide

This folder contains a complete, robust, full-fidelity on-site consultation booking system that runs entirely on the free Google stack: **Google Sheets**, **Google Calendar**, and **Google Apps Script**. No paid APIs or billing accounts are required.

---

## 📂 Code Files Overview
1. **`Code.gs`**: The main request router handling standard `GET` requests (for retrieving staff configurations and day-by-day slot availability) and `POST` requests (for executing/cancelling bookings). Configured with proper MIME headers to allow cross-origin `fetch` calls.
2. **`BookingService.gs`**: Orchestrates safe booking creations. It validates request payloads, prevents concurrency conflicts (double-booking race conditions) via `LockService`, writes clean records to Google Sheets, sets up Gmail confirmation notifications, and syncs calendar meetings.
3. **`AvailabilityService.gs`**: Computes configurable working-hours windows, fetches current calendar bookings, references offline sheets, and returns free time slots.
4. **`EmailService.gs`**: Standardizes HTML and plain-text dispatch templates for confirmations and cancellations.
5. **`SheetService.gs`**: Automates database connection, sheet structure creation, and header initialization.

---

## 🛠️ Step-by-Step Deployment Instructions

Follow these instructions to deploy your booking backend:

### Step 1: Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a **Blank Spreadsheet**.
2. Give it a name (e.g., `Hydrology Systems Booking Database`).
3. Note the sheet is currently blank. The script will automatically initialize the columns and default staff when it boots up!

### Step 2: Open Apps Script Editor
1. In your new spreadsheet, click on **Extensions** > **Apps Script** in the top menu bar.
2. This opens the browser-based Apps Script Editor.

### Step 3: Copy Code Files
1. By default, you will see a file named `Code.gs`. Replace its contents with the code in `Code.gs` inside this folder.
2. Click the `+` icon next to "Files" in the left sidebar and add four more files exactly as named below (they will automatically append a `.gs` extension):
   - `BookingService` (paste contents of `BookingService.gs`)
   - `AvailabilityService` (paste contents of `AvailabilityService.gs`)
   - `EmailService` (paste contents of `EmailService.gs`)
   - `SheetService` (paste contents of `SheetService.gs`)
3. Click the **Save** floppy disk icon at the top of the editor.

### Step 4: Deploy as a Web App
1. Click the **Deploy** button in the top-right corner and select **New deployment**.
2. Click the gear icon next to "Select type" and select **Web app**.
3. Fill out the configuration fields exactly as follows:
   - **Description**: `Hydrology Booking Web App v1`
   - **Execute as**: **Me (your-email@gmail.com)** *(This is critical so the script can write to your Sheet and Calendar)*
   - **Who has access**: **Anyone** *(This is critical so your website can submit fetch requests without requiring user sign-in)*
4. Click **Deploy**.

### Step 5: Authorize Permissions (First-Time Run)
1. You will be prompted with an "Authorize Access" modal. Click **Authorize access**.
2. Choose your Google Account.
3. You will see an "Advanced/Google hasn't verified this app" warning. This is standard for private Apps Scripts. Click **Advanced** and then click **Go to Hydrology Systems Booking Database (unsafe)**.
4. Review the requested permission scopes:
   - **Google Sheets**: Read/write access to manage bookings.
   - **Google Calendar**: Read/write access to sync events.
   - **Gmail/Mail Service**: Permissions to dispatch booking confirmation emails.
5. Click **Allow**.
6. Once deployed, copy the **Web app URL** provided. It will look like this:
   `https://script.google.com/macros/s/AKfycb..._abc123/exec`

---

## 💳 Quotas & Limits (100% Free Stack)
Running on Google's free infrastructure comes with generous daily quotas:
- **Email Dispatches**: 100 emails/day (standard Google Accounts) or 1,500/day (Google Workspace).
- **Calendar Event Creations**: Up to 10,000 requests per day.
- **Trigger Runtime Limit**: 6 minutes per single call (booking executions take under 1.5 seconds).

---

## 🖥️ HTML Embeddable Snippet (Vanilla JS/CSS)

Here is a self-contained, minimal CSS/JS booking modal that you can drop into any standard website. 

```html
<!-- Trigger Button -->
<button id="book-now-btn" class="booking-btn">Book an ROI Consultation</button>

<!-- Booking Modal Backdrop -->
<div id="booking-modal" class="modal-backdrop" style="display: none;">
  <div class="modal-content">
    <div class="modal-header">
      <h3>Schedule Your ROI Consultation</h3>
      <button id="close-modal-btn" class="close-btn">&times;</button>
    </div>
    
    <div id="modal-step-container">
      <!-- Step 1: Select Staff & Date -->
      <div id="step-1" class="modal-step">
        <label for="booking-staff">Expert Consultant:</label>
        <select id="booking-staff">
          <option value="">Loading consultants...</option>
        </select>

        <label for="booking-date" style="margin-top: 15px;">Choose Date:</label>
        <input type="date" id="booking-date" min="" />

        <div id="slots-section" style="margin-top: 20px; display: none;">
          <p><strong>Available Time Slots:</strong></p>
          <div id="slots-grid" class="slots-grid">
            <!-- Dynamic Buttons render here -->
          </div>
        </div>
      </div>

      <!-- Step 2: Customer Contact Info -->
      <div id="step-2" class="modal-step" style="display: none;">
        <p class="summary-preview">Selected: <span id="selected-slot-text"></span></p>
        
        <form id="booking-form">
          <label for="customer-name">Full Name *</label>
          <input type="text" id="customer-name" required placeholder="John Doe" />

          <label for="customer-email" style="margin-top: 12px;">Email Address *</label>
          <input type="email" id="customer-email" required placeholder="john@example.com" />

          <label for="customer-phone" style="margin-top: 12px;">Phone Number</label>
          <input type="tel" id="customer-phone" placeholder="949-555-0199" />

          <label for="booking-service" style="margin-top: 12px;">Consultation Topic</label>
          <select id="booking-service">
            <option value="ROI Assessment Consultation">NaOH On-Site ROI Assessment</option>
            <option value="pH Control Hardware Engineering">Hardware Integration Engineering</option>
            <option value="Chemical Operations Audit">Bulk Chemicals Process Audit</option>
          </select>

          <div class="form-actions" style="margin-top: 20px;">
            <button type="button" id="back-to-step-1" class="secondary-btn">Back</button>
            <button type="submit" id="submit-booking-btn" class="primary-btn">Confirm Appointment</button>
          </div>
        </form>
      </div>

      <!-- Step 3: Success Feedback -->
      <div id="step-3" class="modal-step text-center" style="display: none;">
        <div class="success-icon">✓</div>
        <h4>Appointment Confirmed!</h4>
        <p id="success-msg">Your session has been securely logged. Check your inbox for confirmation details.</p>
        <button id="finish-booking-btn" class="primary-btn">Close Window</button>
      </div>
    </div>
  </div>
</div>

<style>
/* CSS Styles */
.booking-btn {
  background-color: #0d9488;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
.booking-btn:hover { opacity: 0.9; }

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modal-content {
  background: #111115;
  color: #f1f5f9;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 480px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.modal-header h3 { margin: 0; font-size: 18px; }
.close-btn { background: none; border: none; color: #94a3b8; font-size: 24px; cursor: pointer; }
.close-btn:hover { color: #fff; }

.modal-step label { display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px; color: #94a3b8; text-transform: uppercase; }
.modal-step select, .modal-step input {
  width: 100%;
  padding: 10px;
  background: #1e1e24;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #fff;
  box-sizing: border-box;
}
.slots-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  max-height: 180px;
  overflow-y: auto;
  padding: 4px;
}
.slot-btn {
  background: #1e1e24;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  font-size: 13px;
  transition: all 0.2s;
}
.slot-btn:hover { background: #0d9488; color: white; border-color: #0d9488; }
.summary-preview { background: rgba(13, 148, 136, 0.1); border-left: 3px solid #0d9488; padding: 10px; font-size: 13px; margin-bottom: 20px; }
.form-actions { display: flex; gap: 12px; justify-content: flex-end; }
.primary-btn { background: #0d9488; border: none; color: white; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: 600; }
.secondary-btn { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #cbd5e1; padding: 10px 20px; border-radius: 6px; cursor: pointer; }
.primary-btn:hover { opacity: 0.9; }
.secondary-btn:hover { color: white; border-color: white; }
.text-center { text-align: center; }
.success-icon { font-size: 48px; color: #10b981; margin-bottom: 12px; }
</style>

<script>
// Paste your deployed Google Apps Script URL here:
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYED_URL_HERE/exec";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("booking-modal");
  const openBtn = document.getElementById("book-now-btn");
  const closeBtn = document.getElementById("close-modal-btn");
  const staffSelect = document.getElementById("booking-staff");
  const dateInput = document.getElementById("booking-date");
  const slotsSection = document.getElementById("slots-section");
  const slotsGrid = document.getElementById("slots-grid");
  const step1 = document.getElementById("step-1");
  const step2 = document.getElementById("step-2");
  const step3 = document.getElementById("step-3");
  
  let selectedStaff = "";
  let selectedDate = "";
  let selectedSlot = null; // { startTime, endTime }

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;

  // Open Modal
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    fetchStaffList();
  });

  // Close Modal
  const closeModal = () => {
    modal.style.display = "none";
    resetModal();
  };
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // Fetch Staff List
  async function fetchStaffList() {
    staffSelect.innerHTML = '<option value="">Loading consultants...</option>';
    try {
      const res = await fetch(`${APPS_SCRIPT_URL}?action=getStaffList`);
      const result = await res.json();
      if (result.success && result.data) {
        staffSelect.innerHTML = '<option value="">-- Choose Expert --</option>';
        result.data.forEach(staff => {
          const opt = document.createElement("option");
          opt.value = staff.name;
          opt.textContent = `${staff.name} (Working: ${staff.startHour}-${staff.endHour})`;
          staffSelect.appendChild(opt);
        });
      }
    } catch (err) {
      staffSelect.innerHTML = '<option value="">Failed to load consultants</option>';
    }
  }

  // Handle staff and date change to fetch availability
  const checkAvailabilityTrigger = () => {
    selectedStaff = staffSelect.value;
    selectedDate = dateInput.value;
    if (selectedStaff && selectedDate) {
      fetchAvailability();
    } else {
      slotsSection.style.display = "none";
    }
  };
  staffSelect.addEventListener("change", checkAvailabilityTrigger);
  dateInput.addEventListener("change", checkAvailabilityTrigger);

  // Fetch Free Slots
  async function fetchAvailability() {
    slotsGrid.innerHTML = '<div style="grid-column: span 3; text-align:center; padding:15px; color:#94a3b8;">Searching slots...</div>';
    slotsSection.style.display = "block";
    try {
      const res = await fetch(`${APPS_SCRIPT_URL}?action=getAvailability&staff=${encodeURIComponent(selectedStaff)}&date=${selectedDate}&duration=30`);
      const result = await res.json();
      if (result.success && result.data && result.data.length > 0) {
        slotsGrid.innerHTML = "";
        result.data.forEach(slot => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "slot-btn";
          btn.textContent = slot.startTime;
          btn.addEventListener("click", () => selectSlot(slot));
          slotsGrid.appendChild(btn);
        });
      } else {
        slotsGrid.innerHTML = '<div style="grid-column: span 3; text-align:center; padding:15px; color:#f87171;">No slots available for this day.</div>';
      }
    } catch (err) {
      slotsGrid.innerHTML = '<div style="grid-column: span 3; text-align:center; padding:15px; color:#f87171;">Failed to load slots.</div>';
    }
  }

  // Handle slot selection
  function selectSlot(slot) {
    selectedSlot = slot;
    document.getElementById("selected-slot-text").textContent = `${selectedStaff} on ${selectedDate} at ${slot.startTime}`;
    step1.style.display = "none";
    step2.style.display = "block";
  }

  // Back Button
  document.getElementById("back-to-step-1").addEventListener("click", () => {
    step2.style.display = "none";
    step1.style.display = "block";
  });

  // Submit Form
  document.getElementById("booking-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submit-booking-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Processing Booking...";

    const payload = {
      action: "createBooking",
      staffName: selectedStaff,
      date: selectedDate,
      startTime: selectedSlot.startTime,
      endTime: selectedSlot.endTime,
      customerName: document.getElementById("customer-name").value,
      email: document.getElementById("customer-email").value,
      phone: document.getElementById("customer-phone").value,
      service: document.getElementById("booking-service").value
    };

    try {
      const res = await fetch(`${APPS_SCRIPT_URL}?action=createBooking`, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (result.success) {
        step2.style.display = "none";
        step3.style.display = "block";
      } else {
        alert(result.error || "An error occurred. The slot might have been taken.");
      }
    } catch (err) {
      alert("Submission error. Please verify Apps Script Web App URL and CORS configurations.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Confirm Appointment";
    }
  });

  document.getElementById("finish-booking-btn").addEventListener("click", closeModal);

  function resetModal() {
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
    staffSelect.value = "";
    dateInput.value = "";
    slotsSection.style.display = "none";
    slotsGrid.innerHTML = "";
    document.getElementById("booking-form").reset();
  }
});
</script>
```
