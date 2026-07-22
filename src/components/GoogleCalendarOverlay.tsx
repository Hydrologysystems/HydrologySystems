/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";

interface GoogleCalendarOverlayProps {
  id: string;
}

export default function GoogleCalendarOverlay({ id }: GoogleCalendarOverlayProps) {
  useEffect(() => {
    let active = true;

    // 1. Ensure the stylesheet is loaded
    const linkId = "google-calendar-scheduling-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    const initButton = () => {
      const calendarObj = (window as any).calendar;
      const targetEl = document.getElementById(id);
      if (calendarObj && calendarObj.schedulingButton && targetEl) {
        targetEl.innerHTML = ""; // Clear existing button to avoid duplicates

        calendarObj.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3PvPiiOK85zougRr31Bl--l4BVe94HMIKZHNIlyHTp1ZbXSTj4paJKJORtJy5phUP7XHHq6_iz?gv=true",
          color: "#039BE5",
          label: "Book an appointment",
          target: targetEl,
        });
      }
    };

    // 2. Ensure the scheduling script is loaded
    const scriptId = "google-calendar-scheduling-js";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = () => {
        if (active) initButton();
      };
      document.body.appendChild(script);
    } else {
      if ((window as any).calendar) {
        initButton();
      } else {
        script.addEventListener("load", initButton);
      }
    }

    // Interval safety check to handle cases where script loads but DOM isn't updated yet
    const interval = setInterval(() => {
      const targetEl = document.getElementById(id);
      if (targetEl && targetEl.innerHTML === "" && (window as any).calendar) {
        initButton();
      }
    }, 1000);

    return () => {
      active = false;
      clearInterval(interval);
      if (script) {
        script.removeEventListener("load", initButton);
      }
    };
  }, [id]);

  return (
    <div className="google-calendar-wrapper">
      <div
        id={id}
        className="google-calendar-overlay-container"
      />
    </div>
  );
}
