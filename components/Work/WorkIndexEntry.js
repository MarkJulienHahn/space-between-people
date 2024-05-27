"use client";

import React, { useState } from "react";
import Image from "next/image";

const WorkIndexEntry = ({ entry }) => {
  const [columnWidth, setColumnWidth] = useState(300);

  const aspectRatio = entry?.images[0].asset.metadata.dimensions.aspectRatio;

  const height = entry?.images[0].asset.metadata.dimensions.height;
  const width = entry?.images[0].asset.metadata.dimensions.width;

  return (
    <div className="indexEntry">
      <div className="indexImgWrapper">
        <Image
          src={entry?.images[0].asset.url}
          responsive
          width={aspectRatio > 1 ? columnWidth : columnWidth * aspectRatio}
          height={aspectRatio < 1 ? columnWidth : columnWidth / aspectRatio}
        />
        <p
          style={{
            width: aspectRatio > 1 ? columnWidth : columnWidth * aspectRatio,
          }}
        >
          {entry.title}
        </p>
      </div>
    </div>
  );
};

export default WorkIndexEntry;
