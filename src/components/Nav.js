import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import "../styles.css";

export default function Nav() {
  return (
    <div className="Nav-bar">
      <h2 id="nav-logo-text">Pear</h2>
      <nav>

        <NavLink to="/join">Home</NavLink>

        <NavLink to="/support">Support</NavLink>

        <NavLink to="/report">Report</NavLink>

        <NavLink exact to="/">Sign Out</NavLink>
        {/* add in some kind of sign out */}

      </nav>
    </div>
  );
}
