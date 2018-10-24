import React from "react";
import "./style.css";

export default function Burger({ type, isActive, onClick }) {
  const burgerClassNames = ["hamburger", `hamburger--${type}`];
  if (isActive) burgerClassNames.push("is-active");
  return (
    <button
      className={burgerClassNames.join(" ")}
      type="button"
      onClick={onClick}
      aria-label="Menu"
      aria-controls="navigation"
      aria-expanded={isActive}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}
