/* Report landing page allows admin to check reported user list*/
import React, { useState } from "react";
import { reportLogin} from "../api";
import "../css/reportLandingStyles.css";
import {useHistory} from "react-router-dom";

/* function provides admin login button and direct to report list page
 */
export default function ReportLanding() {
    const [password, setPassword] = useState("");

    let history = useHistory();

    /* function calls the api function and handles admin login
    */
    async function handleLogin(event) {
        event.preventDefault();

        var res;

        //waits for the report login function to return a value
        res = (await reportLogin({password}))
        console.log(res);
        console.log(process.env.ADMIN);
        if (res != null){
            //res is True if the password matches
            if ( res == "True") {
                history.push("/admin");
            }
            else{
                alert("Invalid Login");
            }
        }
    }

    //contains the form for admin login
    return (
    <div className="form">
        <div className="report">
            <h1 id = "title">
                Admin Access
            </h1>
            <form onSubmit={handleLogin}>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={event => {
                    setPassword(event.target.value);
                    }}
                />
                <button type="submit" className='adminLogin-btn'>Login</button>
            </form>
        </div>
    </div>
    );
}
