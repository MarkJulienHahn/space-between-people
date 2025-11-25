"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/img/space-between-people-logo.gif";

const Introslider = ({ images }) => {

  return (
    <div className="header">
      <div
        className={`logoContainer`}

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
