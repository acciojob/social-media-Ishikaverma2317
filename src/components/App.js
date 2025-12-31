import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";

export default function App() {
  return (
    <Router>
      <h1>Shopping cart</h1>

      {/* NAVIGATION */}
      <ul>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
      </ul>

      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/users" component={Users} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
    </Router>
  );
}
