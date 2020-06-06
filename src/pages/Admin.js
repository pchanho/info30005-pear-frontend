import React, { useState } from "react";
import "../css/adminStyles.css";
import {useHistory} from "react-router-dom";

export default function Admin() {

    let history = useHistory();

    function listButton(event) {
        event.preventDefault();

        history.push("/reportList");
    }

    return (
    <div className="main">
        <div className="commands">
            <h1 id = "title">
                Admin Commands
            </h1>
            <button type="submit" onClick={listButton}className='report-btn'>Reports list</button>
        </div>
    </div>
    );
}