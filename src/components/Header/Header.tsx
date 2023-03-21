import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-title">To-do list</div>
      <img
        src={process.env.PUBLIC_URL + "/logo-coding-cerrado.png"}
        alt="logo"
        id="header-height"
      />
    </div>
  );
}

export default Header;

// When the screen has horizontal size value (width) lower than 368px, the header starts to be limited by "to-do items", because the items are not developed in a responsive way.
