/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoIconProps {
  className?: string;
  variant?: "light" | "dark" | "footer";
}

export default function LogoIcon({ className = "w-10 h-10", variant = "dark" }: LogoIconProps) {
  // "light" variant is displayed on light backgrounds (uses the darker logo)
  // "dark" variant is displayed on dark backgrounds (uses the lighter logo)
  const lightBgLogo = "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/Hydrology_logo_24x24_2_logo_copy_awdagaw_xmtt7u";
  const darkBgLogo = "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/Hydrology_logo_24x24_2_logo_copy_10_irwpba";
  const footerLogo = "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/Hydrology_logo_24x24_2_logo_copy_awdagaw_zh5pwd";

  let src = darkBgLogo;
  if (variant === "light") {
    src = lightBgLogo;
  } else if (variant === "footer") {
    src = footerLogo;
  }

  return (
    <img
      src={src}
      alt="Hydrology Logo"
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
