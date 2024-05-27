"use client";

import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

export default function Footer({ contact }) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return !pathname.includes("admin") && isClient ? (
    <div className="footerWrapper">
      <div className="newsletterSignup">
        <p>{contact[0]?.newsletterMessage}</p>
        <form>
          <div class="inputWrapper">
            <input type="email" placeholder="E-Mail" />
          </div>
        </form>
      </div>
      <div className="siteMap">
        <ul>
          <li>Work</li>
          <li>Feed</li>
          <li>Index</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Design</li>
          <li>Research</li>
          <li>Consulting</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Imprint</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
