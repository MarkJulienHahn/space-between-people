import React, { useRef, useEffect } from "react";
import WorkListEntry from "./WorkListEntry";

const WorkList = ({ work, setHeight, list, setList }) => {
  const ref = useRef();

  // useEffect(() => {
  //   list && setHeight(ref?.current.clientHeight);
  // }, [list]);

  useEffect(() => {
    list && window.scrollTo({ top: 0 });
  }, [list]);

  return (
    <div
      className="workWrapper indexGrid listWrapper"
    >
      <div className="listWrapper feedOuter" ref={ref}>
        {work.map((entry, i) => (
          <WorkListEntry key={i} entry={entry} setList={setList} />
        ))}
      </div>
    </div>
  );
};

export default WorkList;
