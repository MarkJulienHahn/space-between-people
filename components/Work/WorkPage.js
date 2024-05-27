"use client";

import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

import WorkFeed from "./WorkFeed";
import WorkIndex from "./WorkIndex";
import WorkSubNav from "./WorkSubNav";

const WorkPage = ({ work, categories, indexInitial }) => {
  const [index, setIndex] = useState(indexInitial);
  const [height, setHeight] = useState(null);
  const [filter, setFilter] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    !index && setHeight(null);
  }, [index]);

  useEffect(() => {
    pathname.includes("?index") && setIndex(true);
  }, []);

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
        <WorkIndex
          work={workFiltered}
          index={index}
          setIndex={setIndex}
          setHeight={setHeight}
        />
      </div>
    </>
  );
};

export default WorkPage;
