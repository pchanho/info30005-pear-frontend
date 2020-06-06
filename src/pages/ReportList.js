/* ReportList page is an admin feature that
 * displays all the reports in mongoDB database
 */
import React from 'react';
import { useReports} from "../api";
import { NavLink, useHistory } from "react-router-dom";
import "../css/reportListStyles.css";

// function contains the overall structure of the ReportList page 
export default function ReportList() {
    const { loading, reports, error } = useReports();
    let history = useHistory();

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    // button redirects to home
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
        <div className = "box">
            <h1 id ="title-report-list">Report List</h1>
            <div>
                {reports.map(report => (
                    <Report key={report._id} {...report} />
            ))}
            </div>
        </div>
      </div>
    );
}

// Fetch report data from mongoDB
function Report(report) {
    const {_id, accountId, messageId, reason, status, outcome} = report;
    
    return (
        <div className = "box-data">

        id: {_id} <br></br>
        accountId: {accountId} <br></br>
        messageId: {messageId} <br></br>
        Reason:    {reason} <br></br>
        Status:    {status} <br></br>
        Outcome:   {outcome} <br></br>
        <br></br>
        <br></br>
        </div>
    );
}


