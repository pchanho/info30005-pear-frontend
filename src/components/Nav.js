import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import "../css/styles.css";

// Nav specifies where to nagigate for each menu
export default function Nav() {
  return (
    <div className="Nav-bar">
      <h2 id="nav-logo-text">Pear</h2>
      <nav>

        <NavLink to="/home">Home</NavLink>

        <NavLink to="/support">Support</NavLink>

        <NavLink exact to="/">Sign Out</NavLink>
        {/* add in some kind of sign out */}

      </nav>
    </div>
  );
}
