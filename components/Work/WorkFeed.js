import React from "react";
import WorkFeedEntry from "./WorkFeedEntry";

const WorkFeed = ({ work, index }) => {
  return (
    <div className="workWrapper" style={{ opacity: index ? "0" : "1" }}>
      {work.map((entry, i) => (
        <WorkFeedEntry key={i} entry={entry} />
      ))}
    </div>
  );
};

export default WorkFeed;
