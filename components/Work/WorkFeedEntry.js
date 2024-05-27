import React from "react";
import { PortableText } from "next-sanity";

import WorkSlider from "./WorkSlider";

const WorkFeedEntry = ({ entry }) => {

  return (
    <div className="workWrapper" id={entry.slug.current}>
      <div className="workInfos">
        <div className="workInfosSection">
          <p className="workInfoYear">{entry?.year}</p>
          <h2>{entry?.title}</h2>
        </div>
        <div className="workInfosSection">
          <PortableText value={entry.description} />
        </div>
      </div>
      <WorkSlider entry={entry} />
    </div>
  );
};

export default WorkFeedEntry;
