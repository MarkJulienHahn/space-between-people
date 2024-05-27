"use client";

import React, { useState, useEffect } from "react";

import WorkFeed from "./WorkFeed";
import WorkIndex from "./WorkIndex";
import WorkSubNav from "./WorkSubNav";

const WorkPage = ({ work, categories }) => {
  const [index, setIndex] = useState(false);
  const [height, setHeight] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    !index && setHeight(null);
  }, [index]);

  const workFiltered = filter
    ? work.filter((entry) => entry.category.slug.current == filter)
    : work;

  return (
    <>
      <WorkSubNav
        categories={categories}
        index={index}
        setIndex={setIndex}
        filter={filter}
        setFilter={setFilter}
      />

      <div
        className="workPageSwitch"
        style={{
          transform: index ? "translateX(-100vw)" : "translateX(0)",
          height: height,
        }}
      >
        <WorkFeed work={workFiltered} index={index} />
        <WorkIndex work={workFiltered} index={index} setHeight={setHeight} />
      </div>
    </>
  );
};

export default WorkPage;
