"use client"; //not necessary

import React, { useState, useEffect } from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import useWindowDimensions from "../_Hooks/useWindowDimensions";

const AboutEntry = ({ content, subject }) => {
  const { windowWidth } = useWindowDimensions();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="aboutEntryWrapper" id={content?.category?.slug?.current}>
      <h1>
        <PortableText value={content.headline} />
      </h1>
      <h3>{subject}</h3>
      <PortableText value={content.description} />
      <div className="aboutEntry">
        {content?.images.map((image, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: i % 2 !== 0 ? "75%" : "25%",
              height: i % 2 !== 0 ? "900px" : "400px",
              margin:
                i % 2 !== 0 ? "0 0 0 var(--space-XS)" : "0 var(--space-XS) 0 0",
            }}
          >
            {isClient && windowWidth && (
              <Image
                src={image.asset.url}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEntry;
