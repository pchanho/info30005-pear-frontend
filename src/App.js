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
          </Route>

          <Route path="/home">
            <Nav />
            <Home />
          </Route>

          <Route path="/chat">
            <Nav />
            <Chat />
          </Route>

          <Route path="/create">
            <Nav />
            <Create />
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
