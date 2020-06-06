import React, { useState } from "react";
import { reportLogin} from "../api";
import "../css/reportLandingStyles.css";
import {NavLink, useHistory} from "react-router-dom";

export default function ReportLanding() {
    const [password, setPassword] = useState("");

    let history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        var res
        res = (await reportLogin({password}))
        console.log(res)
        console.log(process.env.ADMIN);
        if (res != null){
            //res is True if the password matches
            if ( res == "True") {
                history.push("/");
            }
            else{
                alert("Invalid Login")
            }
        }
    }

    function loginButton(event) {
        event.preventDefault();

        history.push("/admin");
    }

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
                <button type="submit" onClick={loginButton} className='report-btn'>Login</button>
            </form>
        </div>
    </div>
    );
}