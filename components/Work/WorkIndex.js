import React, { useRef, useEffect } from "react";
import WorkIndexEntry from "./WorkIndexEntry";

const WorkIndex = ({ work, setHeight, index }) => {
  const ref = useRef();

  useEffect(() => {
    setHeight(ref?.current.clientHeight);
  }, [index]);

  return (
    <div className="workWrapper indexGrid" style={{ opacity: !index ? "0" : "1" }}>
      <div className="indexWrapper" ref={ref}>
        {work.map((entry, i) => (
          <WorkIndexEntry key={i} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default WorkIndex;
