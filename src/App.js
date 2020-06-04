import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Support from "./pages/Support";
import Report from "./pages/Report";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Chat from "./pages/Chat";
import Loading from "./pages/Loading";
import ReportLanding from "./pages/ReportLanding"
import Nav from "./components/Nav";
import "./css/styles.css";
import Footer from "./components/Footer";
import LandingFooter from "./components/LandingFooter"

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
            <LandingFooter />
          </Route>

          <Route path="/account">
            <Account />
            <Footer />
          </Route>

          <Route path="/home">
            <Nav />
            <Home />
            <Footer />
          </Route>

          <Route path="/chat">
            <Nav />
            <Chat />
            <Footer />
          </Route>

          <Route path="/create">
            <Nav />
            <Create />
            <Footer />
          </Route>

          <Route path="/support">
            <Support />
          </Route>

          <Route path="/report">
            <Nav />
            <Report />
            <Footer />
          </Route>

          <Route path="/loading">
            <Nav />
            <Loading />
          </Route>

          <Route path="/reportLanding">
            <ReportLanding />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
