import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Support from "./pages/Support";
import Report from "./pages/Report";
import Home from "./pages/Conversation/Home";
import Create from "./pages/Conversation/Create";
import Chat from "./pages/Conversation/Chat";
import Nav from "./components/Nav";
import "./styles.css";
import Footer from "./components/Footer";

export default function App() {
  return (

    //initialise account variable
    //initialise conversation variable

    <Router>
      <div className="App">
        {/* the content */}
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/account">
            <Account />
            {/* edit account variable */}
          </Route>

          <Route path="/home">
            <Nav />
            <Home />
            {/* edit the conversation variable*/}

          </Route>

          <Route path="/chat">
            <Nav />
            <Chat />
            {/* access the account variable */}
            {/* access the conversation variable*/}

            {/* edit the conversation variable*/}

          </Route>

          <Route path="/create">
            <Nav />
            <Create />
            {/* edit the conversation variable*/}
          </Route>

          <Route path="/support">
            <Nav />
            <Support />
          </Route>

          <Route path="/report">
            <Nav />
            <Report />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
