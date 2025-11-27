"use client";
import React from "react";

import { useRouter } from "next/navigation";

const active = { opacity: 0.4, cursor: "pointer" };
const inActive = { opacity: 1, cursor: "default" };
const inActiveClickable = { opacity: 1, cursor: "pointer" };

const WorkSubNav = ({ categories, index, setIndex, filter, setFilter, list, setList }) => {
  const router = useRouter();

  const handleFeed = async (e) => {
    await setIndex(false);
    router.push(`/work`, "/work", { shallow: true });
    setList(false)
  };

  const handleIndex = async (e) => {
    router.push(`/work?index`, "/work/index", { shallow: true });
    setIndex(true);
    setList(false)

  };

  const handleList = async (e) => {
    router.push(`/work?list`, "/work/list", { shallow: true });
    setList(true);
    setIndex(false)

  };

  return (
    <>
      <div className="subNavWrapper">
        <div className="subNav categoriesLeft">
          <span onClick={() => handleFeed()} style={!index && !list ? inActive : active}>
            Feed
          </span>
          <span onClick={() => handleIndex()} style={index ? inActive : active}>
            Index
          </span>
          <span onClick={() => handleList()} style={list ? inActive : active}>
            List
          </span>
        </div>

      </div>

      <div className="subNavWrapperMobile">
        <div className="subNavRow">
          <span onClick={() => handleFeed()} style={!index && !list ? inActive : active}>
            Feed
          </span>
          <span onClick={() => handleIndex()} style={index ? inActive : active}>
            Index
          </span>
          <span onClick={() => handleList()} style={list ? inActive : active}>
            List
          </span>
        </div>

      </div>
    </>
  );
};

export default WorkSubNav;

