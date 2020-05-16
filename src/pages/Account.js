import React, { useState } from "react";
import { addAccount, accountLogin} from "../api";
import "../accountStyles.css";

export default function Account() {
  return (
    <section className="forms">
      <div class="account">
        <AccountAddForm />

        <Login />        
      </div>
    </section>
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

      window.location.reload();
  }

  return (
    <div class="create">
      <h1>Create Account</h1>

      <form>
        <label for="firstName">First Name</label>
          <input 
            type="text" 
            name="firstName" 
            value={firstName}  
            onChange={event => {
              setFirstName(event.target.value);
            }}
          /> <br />
        <label for="lastName">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            value={lastName}  
            onChange={event => {
              setLastName(event.target.value);
            }}
          /> <br />
        <label for="email">Email</label>
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          /> <br />
        <label for="birthday">Date of Birth</label>
          <input 
            type="date" 
            name="birthday"
            max="1955-01-01" 
            value={birthday}
            onChange={event => {
              setBirthday(event.target.value);
            }}
          /> <br />
        <label for="password">Password</label>
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

      window.location.reload();
  }

  return (
    <div class="login">
          <h1>Login</h1>
          <form>
            <label for="email">Email</label>
              <input 
                type="email" 
                name="email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }} 
              /> <br />
            <label for="password">Password</label>
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