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

    function returnButton(event) {
        event.preventDefault();

        history.push("/");
    }

    return (
      <div className="main">
        <h1 id ="title">Report List</h1>
        <div>
          {reports.map(report => (
            <Report key={report._id} {...report} />
            ))}
        </div>
          <button type="submit" onClick={returnButton} className='return-btn'>Return to Home Page</button>
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
        <div className = "report">

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


