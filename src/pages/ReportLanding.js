import React, { useState } from "react";
import { reportLogin} from "../api";
import "../css/reportLandingStyles.css";
import Landing from "./Landing";
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

    function returnButton(event) {
        event.preventDefault();

        history.push("/");
    }

    function loginButton(event) {
        event.preventDefault();

        history.push("/admin");
    }

    return (
    <div className="form">

        <div className="Nav-bar">
        <h2 id="nav-logo-text">Pear</h2>
        </div>
        <button type="submit" onClick={returnButton} className='return-btn'>Return to Home Page</button>
        
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
                <button type="submit" onClick={loginButton} className='adminLogin-btn'>Login</button>
            </form>
        </div>
    </div>
    );
}