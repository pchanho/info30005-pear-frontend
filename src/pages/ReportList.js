import React from 'react';
import { useReports} from "../api";
import { NavLink, useHistory } from "react-router-dom";
import "../css/createStyles.css";

// Present conversation list, conversation creation
export default function ReportList() {
    const { loading, reports, error } = useReports();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return (
      <div>
        <h1>Report List</h1>
        <div>
          {reports.map(report => (
            <Report key={report.id} {...report} />
            ))}
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
        <div>
        <h1>{_id} {accountId} {messageId} {reason} {status} {outcome}</h1>
        <br></br>
        </div>
    );
}


