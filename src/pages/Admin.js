/* Admin page shows all the possible features available to admins of Pear
 * However, as of now there is only one feature available
 */
import React, { useState } from "react";
import "../css/adminStyles.css";
import { useHistory } from "react-router-dom";

/* function contains the overall structure of the admin page 
   and button to redirect to admin feature 
*/
export default function Admin() {
  let history = useHistory();

  function listButton(event) {
    event.preventDefault();
    history.push("/reportList");
  }

  return (
    <div className="main">
      <div className="commands">
        <h1 id="title">Admin Commands</h1>
        <button type="submit" onClick={listButton} className="report-btn">
          Reports list
        </button>
      </div>
    </div>
  );
}
