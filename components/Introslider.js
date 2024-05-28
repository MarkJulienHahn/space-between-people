"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/img/space-between-people-logo.gif";

const Introslider = ({ images }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isFaded, setIsFaded] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setIsFaded(currentScrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      <div
        className={`logoContainer ${isFaded ? "fade-out" : ""}`}
        style={{ transform: `translateY(-${scrollY / 4}px)` }}
      >
        <Image src={logo} width={500} height={500} />
      </div>
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
