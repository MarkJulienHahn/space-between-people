"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const Introslider = ({ images }) => {
  // useEffect(() => {
  //   return () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };
  // }, []);

  return (
    <div className="header">
      {images.map((image, i) => (
        <div key={i} className="sliderImageWrapper">
          <Image
            src={image.asset.url}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Introslider;
