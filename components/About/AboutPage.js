"use client";

import React, { useState } from "react";

import Link from "next/link";

import AboutEntry from "./AboutEntry";

const AboutPage = ({ categories, about }) => {
  const [active, setActive] = useState();

  return (
    <>
      <div className="subNavWrapper">
        <div className="subNav subNavAbout">
          <div>
            {categories.map((category, i) => (
              <Link href={`/about/#${category?.slug?.current}`}>
                <span
                  style={{
                    opacity: active == category?.slug?.current ? 1 : 0.5,
                  }}
                  key={i}
                >
                  {category.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="subNavWrapperMobile">
        <div className="subNavRow">
          {categories.map((category, i) => (
            <Link href={`/about/#${category?.slug?.current}`}>
              <span
                style={{ opacity: active == category?.slug?.current ? 1 : 0.5 }}
                key={i}
              >
                {category.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="aboutPageWrapper">
        <AboutEntry
          content={about[0].design}
          subject={"Design"}
          setActive={setActive}
        />
        <AboutEntry
          content={about[0].research}
          subject={"Research"}
          setActive={setActive}
        />
        <AboutEntry
          content={about[0].consulting}
          subject={"Collaboration"}
          setActive={setActive}
        />
      </div>
    </>
  );
};

export default AboutPage;
