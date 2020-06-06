/* Admin page shows all the possible features available to admins of Pear
 * However, as of now there is only one feature available
 */
import React, { useState } from "react";
import "../css/adminStyles.css";
import {useHistory} from "react-router-dom";

/* function contains the overall structure of the admin page 
   and button to redirect to admin feature 
*/
export default function Admin() {

    let history = useHistory();

    //redirect admin page depending on the type of buttons pressed
    function returnButton(event) {
        event.preventDefault();
        history.push("/");
    }
    function listButton(event) {
        event.preventDefault();
        history.push("/reportList");
    }

    return (
    <div className="main">

        <div className="Nav-bar">
        <h2 id="nav-logo-text">Pear</h2>
        </div>
        <button type="submit" onClick={returnButton} className='return-btn'>Return to Home Page</button>
        
        {/* command section shows the additional features */}
        <div className="commands">
            <h1 id = "title">
                Admin Commands
            </h1>

            <button type="submit" onClick={listButton}className='report-btn'>Reports list</button>
            
        </div>
    </div>
    );
}