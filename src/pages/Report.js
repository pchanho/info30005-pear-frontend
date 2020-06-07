/* Report page handles the creation/submission of report
 * Reporting feature of Pear
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/reportStyles.css";
import { addReport } from "../api.js";

/* function contains the overall structure of report page with links
 * to reason form
 */
export default function Report(data) {
  return (
    <div className="report-page">
      
      <div className="reason-display">
        <ReasonForm />
      </div>

    </div>
  );
}

/* function contains the fields required to create a report and handles report
   creation with the database on form submit  */
function ReasonForm() {
  //assign the proper inputs from form
  const [accountId, setAccountId] = useState("");
  const [messageId, setMessageId] = useState("");
  const [reason, setReason] = useState("");

  let history = useHistory();

  //on submit, add message to mongoDB database
  function onSubmit() {
    addReport({
      accountId,
      messageId,
      reason,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    history.push("/chat");
  }

  /* form contains a box for reason output and using session storage,
   * accountId and messageId are procured
   */
  return (
    <div className="reasonBox">
      <h1>Write reason: </h1>
      <h2>(Up to 50 words)</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          id="reason-input"
          type="reason"
          name="report"
          placeholder="Type your reason"
          value={reason}
          onChange={(event) => {
            setAccountId(sessionStorage.getItem("reportUserId"));
            setMessageId(sessionStorage.getItem("reportMessageId"));
            setReason(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <br></br>
        <input type="submit" value="Send" id="btn" onClick={onSubmit} />
      </form>
    </div>
  );
}
