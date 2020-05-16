import React, { useState } from "react";
import { addAccount, accountLogin} from "../api";
import "../accountStyles.css";
import Landing from "./Landing";
import {NavLink} from "react-router-dom";

export default function Account() {
  return (
    <div>
      <div className="Nav-bar">
        <h2 id="nav-logo-text">Pear</h2>
      </div>
      <section className="forms">
        <div class="account">
          <AccountAddForm />

          <Login />
          <NavLink to="/home" className="admin-btn">Admin Login</NavLink>
        </div>
      </section>
    </div>
  );
}

function AccountAddForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit() {
    addAccount({
      firstName,
      lastName,
      email, 
      birthday, 
      password
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="create">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            value={firstName}  
            onChange={event => {
              setFirstName(event.target.value);
            }}
          /> <br />
        <label>Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            value={lastName}  
            onChange={event => {
              setLastName(event.target.value);
            }}
          /> <br />
        <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          /> <br />
        <label>Date of Birth</label>
          <input 
            type="date" 
            name="birthday"
            max="1955-01-01" 
            value={birthday}
            onChange={event => {
              setBirthday(event.target.value);
            }}
          /> <br />
        <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          /> <br />
        <input type="submit" value="Submit" className='account-btn' onClick={onSubmit}/>
      </form>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function onLogin() {
    accountLogin({
      email, 
      password
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    return (
      <Landing />
    );
  }

  return (
    <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }} 
              /> <br />
            <label>Password</label>
              <input 
                type="password" 
                name="password" 
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              /> <br />
            <button type="submit" onClick={onLogin} className='account-btn'>Login</button>
          </form>
        </div>
  );
}