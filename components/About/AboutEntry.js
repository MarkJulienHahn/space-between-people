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

  console.log(content.portrait)

  return (
    <div className="aboutEntryWrapper">
      <div className="aboutText">
        <PortableText value={content.about} components={customSerializers} />
      </div>

      <div className="aboutImageWrapper">
        <div className="aboutImage">
          <Image
            src={content.portrait.url}
            width={content.portrait.metadata.dimensions.width}
            height={content.portrait.metadata.dimensions.height}
            style={{
              objectFit: "contain",
              objectPosition: "top",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutEntry;
