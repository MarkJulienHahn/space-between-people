"use client";

import React, { useState } from "react";

import Link from "next/link";

import AboutEntry from "./AboutEntry";

const AboutPage = ({ categories, about }) => {
  const [active, setActive] = useState();



  return (
    <>


      <div className="aboutPageWrapper">
        <AboutEntry
          content={about}
          setActive={setActive}
        />
      </div>
    </>
  );
};

export default AboutPage;
