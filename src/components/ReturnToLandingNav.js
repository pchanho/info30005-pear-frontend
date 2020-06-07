import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/styles.css";

// Nav specifies where to navigate for each menu
export default function ReturnToLandingNav() {
  let history = useHistory();

  function returnButton(event) {
    event.preventDefault();

    history.push("/");
  }

  return (
    <div className="Nav-bar">
      <h2 id="nav-logo-text">Pear</h2>
      <nav>
        <button type="submit" onClick={returnButton}>
          Return to Landing Page
        </button>
      </nav>
    </div>
  );
}
