"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import useWindowDimensions from "../_Hooks/useWindowDimensions";

import { useRouter } from "next/navigation";

const WorkListEntry = ({ entry, setList }) => {
  const [columnWidth, setColumnWidth] = useState(300);

  const { windowWidth } = useWindowDimensions();

  const aspectRatio = entry?.images[0].asset.metadata.dimensions.aspectRatio;

  const router = useRouter();
  const handleClick = async () => {
    await setList(false);
    router.push(`/work#${entry.slug.current}`);
  };

  useEffect(() => {
    windowWidth < 1000 && setColumnWidth(120);
  }, [windowWidth]);

  return (
    <div className="listEntry" onClick={handleClick}>

      <p className="listEntryYear">{entry.year}</p>
      <p
        className="listEntryTitle"
      >
        {entry.title}
      </p>
      <p
        className="listEntryCategory"
      >
        {entry.cat}
      </p>

    </div>
  );
};

export default WorkListEntry;
