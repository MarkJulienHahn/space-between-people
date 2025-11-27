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
          <div className="workInfosSectionTop">
            <p className="workInfoYear">{entry?.year}</p>
            <h2>{entry?.title}</h2>
          </div>  
          <WorkSlider entry={entry} />
        </div>
        <div className="workInfosText">
          {entry?.cat && <h2 className="workInfosCategory">{entry?.cat}</h2>}
          <PortableText
            value={entry.description}
            components={customSerializers}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkFeedEntry;
