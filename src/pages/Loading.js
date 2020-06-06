import React from 'react';
import logo from "../img/Pear_logo.png";
import { NavLink } from "react-router-dom";
import "../css/loadingStyles.css";

 {/*Used as a waiting screen while a conversation is created in the database*/}
export default function Landing() {
    return (
        <div className="loading">
                <h1> LOADING</h1>
        </div>
    );
}