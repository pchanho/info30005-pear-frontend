import React, { useState } from "react";
import { addAccount, accountLogin} from "../api";
import "../css/accountStyles.css";
import Landing from "./Landing";
import {NavLink, useHistory} from "react-router-dom";

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
  var userImage

  let history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    var res
    res = await addAccount({
      firstName,
      lastName,
      email, 
      birthday, 
      password,
      userImage
    });
    console.log(res)
    if(res != null ){
      if (res.data == "True"){
        history.push("/support");
      }
      else{
        alert("failed to create account")
      }
    }
    
    
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
          <label>Profile Picture</label>
           <input
              type="file"
              value={userImage}
              onChange={event => {
              userImage = event.target.files[0];
              }}
              onClick={event => {
                event.target.value = null
              }}
            />
        <input type="submit" value="Submit" className='account-btn' />
      </form>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  /*
  function onLogin() {
    accountLogin({
      email, 
      password
    });
  }
*/
  let history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    // const prom =  accountLogin({email, password})



    //alert(await accountLogin({email, password}));
    //alert(then(value => {await accountLogin({email, password})}));
    
    //if email and password found function returns true 
    var res
    res = (await accountLogin({email, password}))
    console.log(res.data)
    if (res != null){
      if ( res.data!= "False") {
        sessionStorage.setItem('accountId', res.data);
        history.push("/home");
      }
      else{
        alert("Invalid Login")
      }
    }
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
            <button type="submit" className='account-btn'>Login</button>
          </form>
        </div>
  );
}

