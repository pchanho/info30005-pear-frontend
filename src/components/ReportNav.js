import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

// Nav specifies where to nagigate for each menu
export default function ReportNav() {
  return (
    <div className="Nav-bar">
      <h2 id="nav-logo-text">Pear</h2>
      <nav>
        <NavLink to="/chat">Return to Chat</NavLink>
      </nav>
    </div>
  );
}
