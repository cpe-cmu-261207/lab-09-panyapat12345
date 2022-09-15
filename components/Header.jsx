import React from "react";

export default function Header(props) {
  return (
    <div className="d-flex justify-content-center">
      <span className="h1 pb-4 ">{props.children}</span>
    </div>
  );
}
