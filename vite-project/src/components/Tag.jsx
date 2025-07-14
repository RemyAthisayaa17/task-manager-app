import React from "react";

import "./Tag.css";

const Tag = ({tagName, selectTag, selected }) => {
  const tagStyle = {
    PRIORITY: {backgroundColor: "#fda821"},
    HIGHPRIORITY: {backgroundColor: "#15d4c8"},
    LOWPRIORITY: {backgroundColor: "#ffd12c"},
    default: {backgroundColor: "#f9f9f9"},
  }

  return (
  <button type = 'button' className='tag' style = { selected ? tagStyle[tagName] : tagStyle.default }
    onClick={() => selectTag(tagName)}> 
    {tagName}
  </button>
  );
 };

export default Tag;