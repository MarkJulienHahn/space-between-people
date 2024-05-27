import React, { useRef, useEffect } from "react";
import WorkIndexEntry from "./WorkIndexEntry";

const WorkIndex = ({ work, setHeight, index, setIndex }) => {
  const ref = useRef();

  useEffect(() => {
    setHeight(ref?.current.clientHeight);
  }, [index]);

  useEffect(() => {
    index && window.scrollTo({ top: 0 });
  }, [index]);

  return (
    <div
      className="workWrapper indexGrid"
      style={{ opacity: !index ? "0" : "1" }}
    >
      <div className="indexWrapper" ref={ref}>
        {work.map((entry, i) => (
          <WorkIndexEntry key={i} entry={entry} setIndex={setIndex} />
        ))}
      </div>
    </div>
  );
};

export default WorkIndex;
