"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { PortableText } from "next-sanity";

import { useInView } from "react-intersection-observer";
import useWindowDimensions from "../_Hooks/useWindowDimensions";

const AboutEntry = ({ content, subject, setActive }) => {
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

  return (
    <div
      className="aboutEntryWrapper"
      ref={ref}
      id={content?.category?.slug?.current}
    >
      <h1>
        <PortableText value={content.headline} />
      </h1>
      <h3>{subject}</h3>
      <PortableText value={content.description} />

      <div className="aboutEntry">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "calc(100vh - 100px)",
          }}
        >
          {isClient && windowWidth && (
            <Image
              src={content.image.asset.url}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          )}
        </div>
      </div>

      <div className="aboutEntryMobile">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "60vw",
          }}
        >
          {isClient && windowWidth && (
            <Image
              src={content.image.asset.url}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          )}
        </div>
      </div>

      {/* <div className="aboutEntryMobile">
        {content?.images.map((image, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              height: "300px",
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
      </div> */}
    </div>
  );
};

export default AboutEntry;
