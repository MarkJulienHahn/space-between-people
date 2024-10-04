"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer({ contact }) {
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState(""); // Zustand für den E-Mail-Input
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Aktualisierung des E-Mail-Zustands
  };

  return !pathname.includes("admin") && isClient ? (
    <div className="footerWrapper">
      <div className="newsletterSignup">
        <p>{contact[0]?.newsletterMessage}</p>
        <form
          action="https://spacebetweenpeople.us22.list-manage.com/subscribe/post?u=3d238c0bbb0e153e4f7a88378&amp;id=4cb025004c&amp;f_id=0003cde1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div className="inputWrapper">
            <input
              type="email"
              name="EMAIL"
              placeholder="E-Mail"
              className="required email"
              id="mce-EMAIL"
              value={email} // Binden des Zustands an das Eingabefeld
              onChange={handleEmailChange} // Hinzufügen eines Änderungs-Handlers
            />
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
            <Link href="/about#Collaboration">Collaboration</Link>
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
