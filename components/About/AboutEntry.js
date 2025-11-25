"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { PortableText } from "next-sanity";

import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../_Hooks/useWindowDimensions";

const AboutEntry = ({ content, setActive }) => {
  const { windowWidth } = useWindowDimensions();
  const [isClient, setIsClient] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    inView && setActive(content?.category?.slug?.current);
  }, [inView]);

  const customSerializers = {
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div
      className="aboutEntryWrapper"
    >
      <div className="aboutImageWrapper">
        <div className="aboutImage">
          <Image
            src={content.portrait.url}
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      <div className="aboutText">
        <h1>
          About
        </h1>
        <PortableText
          value={content.about}
          components={customSerializers}
        />
      </div>
    </div>
  );
};

export default AboutEntry;
