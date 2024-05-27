"use client";

import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

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
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/work">Feed</Link>
          </li>
          <li>
            <Link href="/work/index">Index</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about#design">Design</Link>
          </li>
          <li>
            <Link href="/about#research">Research</Link>
          </li>
          <li>
            <Link href="/about#consulting">Consulting</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/contact/imprint">Imprint</Link>
          </li>
          <li>
            <Link href="/contact/privacy">Privacy</Link>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
