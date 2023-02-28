import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <div className="Header-title">To-do list</div>
      <div className="Header-logo">
        <img
          src={process.env.PUBLIC_URL + "/logo-coding-cerrado.png"}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Header;

// Mobile e Desktop
// Cor de fundo do logo***
// Redimensionamento da img***
// Flexbox não cumprindo seu papel***
