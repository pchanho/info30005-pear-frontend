import React from 'react';
import "../styles.css";
import logo from "../img/Pear_logo.png";
import { NavLink } from "react-router-dom";


export default function Landing() {
    return (
        <div>
            <section className="landing">
                <img src={logo} className="landing_logo" alt="logo"/>
                <h1>Welcome to Pear</h1>
                <h3>Connect with Pear</h3>
                <NavLink to="/join" className="btn">Join Conversation</NavLink>
            </section>

            <div className="bgImg" alt="bgImg"></div>

            <section className="about-pear">
                <h3 className="title">About Pear</h3>
                <p id='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices.
                    Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu. pien, id sagittis augue malesuad</p>
            </section>

        </div>
    );
}
