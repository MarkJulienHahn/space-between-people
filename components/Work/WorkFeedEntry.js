import React from "react";
import { PortableText } from "next-sanity";

import WorkSlider from "./WorkSlider";

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

const WorkFeedEntry = ({ entry }) => {
  return (
    <div className="workWrapper">
      <div className="workInfos" id={entry.slug.current}>
        <div className="workInfosSection">
          <p className="workInfoYear">{entry?.year}</p>
          <h2>{entry?.title}</h2>
        </div>
        <div className="workInfosText">
          <PortableText
            value={entry.description}
            components={customSerializers}
          />
        </div>
      </div>
      <WorkSlider entry={entry} />
    </div>
  );
};

export default WorkFeedEntry;
