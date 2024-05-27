import React from "react";

const active = { opacity: 0.4, cursor: "pointer" };
const inActive = { opacity: 1, cursor: "default" };
const inActiveClickable = { opacity: 1, cursor: "pointer" };

const WorkSubNav = ({ categories, index, setIndex, filter, setFilter }) => {
  return (
    <div className="subNavWrapper">
      <div className="subNav categoriesLeft">
        <span
          onClick={() => setIndex(false)}
          style={!index ? inActive : active}
        >
          Feed
        </span>
        <span onClick={() => setIndex(true)} style={index ? inActive : active}>
          Index
        </span>
      </div>
      <div className="subNav categoriesRight">
        {categories.map((category, i) => (
          <span
            style={filter == category?.slug.current || filter == "" ? inActiveClickable : active}
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
  );
};

export default WorkSubNav;
