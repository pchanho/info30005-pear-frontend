import React, { useState } from "react";
import "../css/adminStyles.css";
import {useHistory} from "react-router-dom";

export default function ReportLanding() {

    let history = useHistory();

    function returnButton(event) {
        event.preventDefault();

        history.push("/");
    }

    return (
    <div className="main">

        <div className="Nav-bar">
        <h2 id="nav-logo-text">Pear</h2>
        </div>
        <button type="submit" onClick={returnButton} className='return-btn'>Return to Home Page</button>
        
        <div className="commands">
            <h1 id = "title">
                Admin Commands
            </h1>

            <button type="submit" className='report-btn'>Reports list</button>
            
        </div>
    </div>
    );
}