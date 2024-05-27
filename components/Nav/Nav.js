"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Nav = () => {
  const [homeRefWidth, setHomeRefWidth] = useState(null);

  const pathname = usePathname();

  const homeRef = useRef();
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    setHomeRefWidth(homeRef?.current?.clientWidth);
  }, []);

  return (
    !pathname.includes("admin") && (
      <div className="navWrapper">
        <div
          className="navEntry"
          ref={homeRef}
          style={{
            left:
              pathname.includes("/work") ||
              pathname.includes("/about") ||
              pathname.includes("/contact")
                ? "var(--space-XS)"
                : `calc(50vw - ${homeRefWidth / 2}px)`,
          }}
        >
          <Link href={"/"} scroll={false}>
            <h2>Space Between People</h2>
          </Link>
        </div>

        <div
          className="navEntry"
          ref={workRef}
          style={
            pathname.includes("/work")
              ? { left: `calc(50vw - ${workRef?.current?.clientWidth / 2}px)` }
              : pathname.includes("/about") || pathname.includes("/contact")
              ? { left: `300px` }
              : {
                  left: `calc(100vw - ${320}px)`,
                }
          }
        >
          <Link href={"/work"} scroll={false}>
            <h2>Work</h2>
          </Link>
        </div>

        <div
          className="navEntry"
          ref={aboutRef}
          style={
            pathname.includes("/about")
              ? { left: `calc(50vw - ${aboutRef?.current?.clientWidth / 2}px)` }
              : pathname == "/" || pathname.includes("/work")
              ? { left: `calc(100vw - ${215}px)` }
              : {
                  left: `400px`,
                }
          }
        >
          <Link href={"/about"} scroll={false}>
            <h2>About</h2>
          </Link>
        </div>

        <div
          className="navEntry"
          ref={contactRef}
          style={
            pathname.includes("/contact")
              ? {
                  left: `calc(50vw - ${
                    contactRef?.current?.clientWidth / 2
                  }px)`,
                }
              : { left: `calc(100vw - ${105}px)` }
          }
        >
          <Link href={"/contact"} scroll={false}>
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
    )
  );
};

export default Nav;
