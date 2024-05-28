import React, { useState } from "react";

const HoverComp = ({ text }) => {
  // Function to generate random offset for each letter
  const generateRandomOffsets = () => {
    return text.split("").map(() => ({
      x: Math.floor(Math.random() * 5) - 2, // Random value between -10 and 10
      y: Math.floor(Math.random() * 11) - 5,
    }));
  };

  // State to store the offsets
  const [offsets, setOffsets] = useState(
    text.split("").map(() => ({ x: 0, y: 0, rotate: 0 }))
  );

  // Handler for mouse enter and leave events
  const handleMouseEnter = () => {
    setOffsets(generateRandomOffsets());
  };

  const handleMouseLeave = () => {
    setOffsets(text.split("").map(() => ({ x: 0, y: 0 })));
  };

  return (
    <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="hover-effect-letter"
          style={{
            display: "inline-block",
            transform: `translate(${offsets[index].x}px, ${offsets[index].y}px)`,
            transition: "transform 0.3s ease",
          }}
        >
          {letter}
        </span>
      ))}
    </h2>
  );
};

export default HoverComp;
