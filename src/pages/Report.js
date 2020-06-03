import React, { useState } from 'react';
import "../css/reportStyles.css";
import {addReport} from "../api.js";

export default function Report(data) {
  return (
    <div className = "report-page">    
          
      <div className = "grid-item">
        AccountId: {sessionStorage.getItem('reportUserId')}
      </div>  
          
      <div className = "grid-item reason-display">
        <ReasonForm/>
      </div>  
          
      <div className = "grid-item">
        MessageId: {sessionStorage.getItem('reportMessageId')}
      </div>
      
    </div>
  );
}

function ReasonForm() {
  //assign the proper inputs from form
  const [accountId, setAccountId] = useState("");
  const [messageId, setMessageId] = useState("");
  const [reason, setReason] = useState("");
 
 //on submit, add message to mongoDB database
 function onSubmit() {
   addReport({
     accountId,
     messageId, 
     reason

   });
}
 function handleSubmit(event){
   event.preventDefault();
 }

 return (
   <div className = "reasonBox">
     <h1>Write reason: </h1>
     <h2>(Up to 50 words)</h2>
     <br></br>
     <form onSubmit={handleSubmit}>
        <input 
         id = "reason-input"
         type="reason" 
         name="report"
         placeholder="Type your reason"
         value={reason}  
         onChange={event => {
           setReason(event.target.value);
          }}
           
        /> 
        <br></br>
        <br></br>
        <br></br>
       <input type="submit" value="Send" id='btn' onClick={onSubmit}/>
     </form> 
   </div>
 );
}