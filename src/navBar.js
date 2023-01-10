import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navBar.css";

export default function navBar() {
  return (
    <div>
      <nav className="nav-container">
        <button className="nav-btn">
          <NavLink to="/">UseReducer Counter</NavLink>
        </button>

        <button className="nav-btn">
          <NavLink to="/customCounter">CustomCounter</NavLink>
        </button>
      </nav>
    </div>
  );
}
