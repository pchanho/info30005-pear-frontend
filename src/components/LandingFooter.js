import React from "react";
import { NavLink } from "react-router-dom";

// Footer explains Pear team member and copyright of website
export default function Footer() {
  return (
    <footer>
      <p>&copy; Copyright 2020, INFO30005 Pear</p>
      <p id="member">
        Gemma Seeley, Chanho Park, Deevesh Shanmuganathan, Dimitri Sadikin,
        Glenn Phillips
      </p>
      <NavLink to="/reportLanding" className="adminLink">
        Admin Access
      </NavLink>
    </footer>
  );
}
