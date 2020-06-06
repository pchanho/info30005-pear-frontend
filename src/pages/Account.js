/* Accounts page handles the creation of user accounts and secure login to a
    users account
*/

import React, { useState } from "react";
import { addAccount, accountLogin } from "../api";
import "../css/accountStyles.css";
import { useHistory } from "react-router-dom";

/* function contains the overall structure of the accounts page with links to 
    account and login forms 
*/
export default function Account() {
  return (
    <div>
      <section className="forms">
        <div className="account">
          <AccountAddForm />

          <Login />
        </div>
      </section>
    </div>
  );
}

/* function contains the fields required to create an account and handles account
    creation with the database on form submit 
*/
function AccountAddForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  var userImage;

  let history = useHistory();

  /* function adds account information to the database and handles page redirect 
      to the opening support page 
  */
  async function handleSubmit(event) {
    event.preventDefault();
    var res;

    //waits for a return value from add account
    res = await addAccount({
      firstName,
      lastName,
      email,
      birthday,
      password,
      userImage,
    });
    console.log(res);

    //allows page redirect only if add account is successful
    if (res != null) {
      if (res.data == "True") {
        history.push("/support");
      } else {
        alert("failed to create account");
      }
    }
  }

  //form contains all field required to create an account
  return (
    <div className="create">
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />{" "}
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />{" "}
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
        <br />
        <label>Date of Birth</label>
        <input
          type="date"
          name="birthday"
          max="1955-01-01"
          value={birthday}
          onChange={(event) => {
            setBirthday(event.target.value);
          }}
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
        <br />
        <label>Profile Picture</label>
        <input
          type="file"
          value={userImage}
          onChange={(event) => {
            userImage = event.target.files[0];
          }}
          onClick={(event) => {
            event.target.value = null;
          }}
        />
        <input type="submit" value="Submit" className="account-btn" />
      </form>
    </div>
  );
}

/* function checks the login credentials of a user against account details stored
    in the database, allows access if credentials match  
*/
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  /* function checks credentials on form submit
   */
  async function handleLogin(event) {
    event.preventDefault();
    var res;

    //waits for a return value from account login
    res = await accountLogin({
      email,
      password,
    });
    console.log(res.data);

    //allows page redirect only if credentials match
    if (res != null) {
      if (res.data != "False") {
        sessionStorage.setItem("accountId", res.data);
        history.push("/home");
      } else {
        alert("Invalid Login");
      }
    }
  }

  //form contains all field required to login to an account
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />{" "}
        <br />
        <button type="submit" className="account-btn">
          Login
        </button>
      </form>
    </div>
  );
}
