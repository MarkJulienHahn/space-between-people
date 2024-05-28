"use client";
import React from "react";

import { useRouter } from "next/navigation";

const active = { opacity: 0.4, cursor: "pointer" };
const inActive = { opacity: 1, cursor: "default" };
const inActiveClickable = { opacity: 1, cursor: "pointer" };

const WorkSubNav = ({ categories, index, setIndex, filter, setFilter }) => {
  const router = useRouter();

  const handleFeed = async (e) => {
    await setIndex(false);
    router.push(`/work`, "/work", { shallow: true });
  };

  const handleIndex = async (e) => {
    router.push(`/work?index`, "/work/index", { shallow: true });
    setIndex(true);
    // history.replaceState(null, "", `/work/index`);
  };

  return (
    <>
      <div className="subNavWrapper">
        <div className="subNav categoriesLeft">
          <span onClick={() => handleFeed()} style={!index ? inActive : active}>
            Feed
          </span>
          <span onClick={() => handleIndex()} style={index ? inActive : active}>
            Index
          </span>
        </div>
        <div className="subNav categoriesRight">
          {categories.map((category, i) => (
            <span
              style={
                filter == category?.slug.current || filter == ""
                  ? inActiveClickable
                  : active
              }
              onClick={
                filter == category?.slug.current
                  ? () => setFilter("")
                  : () => setFilter(category?.slug.current)
              }
              key={i}
            >
              {category.title}
            </span>
          ))}
        </div>
      </div>

      <div className="subNavWrapperMobile">
        <div className="subNavRow">
          <span onClick={() => handleFeed()} style={!index ? inActive : active}>
            Feed
          </span>
          <span onClick={() => handleIndex()} style={index ? inActive : active}>
            Index
          </span>
        </div>
        <div className="subNavRow">
          {" "}
          {categories.map((category, i) => (
            <span
              style={
                filter == category?.slug.current || filter == ""
                  ? inActiveClickable
                  : active
              }
              onClick={
                filter == category?.slug.current
                  ? () => setFilter("")
                  : () => setFilter(category?.slug.current)
              }
              key={i}
            >
              {category.title}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkSubNav;
