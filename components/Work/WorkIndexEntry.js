"use client";

import React, { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

const WorkIndexEntry = ({ entry, setIndex }) => {
  const [columnWidth, setColumnWidth] = useState(300);

  const aspectRatio = entry?.images[0].asset.metadata.dimensions.aspectRatio;

  const router = useRouter();
  const handleClick = async () => {
    await setIndex(false);
    router.push(`/work#${entry.slug.current}`);
  };

  return (
    <div className="indexEntry" onClick={handleClick}>
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
