import React from "react";

function Avatar (props) {
  return (
    <img src={props.src} className="img-thumbnail" alt={props.alt} />
  );
};

export default Avatar;
