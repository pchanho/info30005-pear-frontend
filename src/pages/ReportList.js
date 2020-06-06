import React from 'react';
import { useReports} from "../api";
import { NavLink, useHistory } from "react-router-dom";
import "../css/reportListStyles.css";

// Present conversation list, conversation creation
export default function ReportList() {
    const { loading, reports, error } = useReports();
    let history = useHistory();

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return (
      <div className="main">
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
    //   <button
    //     className={`conversation-item conversation-${topic}`}
    //     key={topic}
    //     style={{backgroundImage: `url(${topicImage})`}}
    //     onClick={handleClick}
    //   >
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


