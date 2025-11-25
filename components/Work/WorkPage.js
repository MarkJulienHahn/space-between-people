"use client";

import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

import WorkFeed from "./WorkFeed";
import WorkIndex from "./WorkIndex";
import WorkList from "./WorkList";
import WorkSubNav from "./WorkSubNav";

const WorkPage = ({ work, categories, indexInitial }) => {
  const [index, setIndex] = useState(indexInitial);
  const [list, setList] = useState(null);
  const [height, setHeight] = useState(null);
  const [filter, setFilter] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    (!index || !list) && setHeight(null);
  }, [index]);

  useEffect(() => {
    pathname.includes("?index") && setIndex(true) && setList(false);
    pathname.includes("?list") && setIndex(false) && setList(true);
    !pathname.includes("?list") || !pathname.includes("?index") && setIndex(false) && setList(false);
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
        list={list}
        setList={setList}
      />

      <div
        className="workPageSwitch"
        style={{
          transform: index
            ? "translateX(-100vw)"
            : list
              ? "translateX(-200vw)"
              : "translateX(0)",
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
        <WorkList
          work={workFiltered}
          list={list}
          setList={setList}
          setHeight={setHeight}
        />
      </div>
    </>
  );
};

export default WorkPage;
