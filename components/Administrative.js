import React from "react";
import { PortableText } from "next-sanity";

const Administrative = ({ content }) => {
  return (
    <div className="administrativeWrapper">
      <PortableText value={content.text} />
    </div>
  );
};

export default Administrative;
