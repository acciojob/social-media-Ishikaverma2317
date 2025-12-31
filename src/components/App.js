import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <h1>GenZ</h1>

        {/* NAVBAR (a tags only) */}
        <nav>
          <a href="/">Posts</a>
          <a href="/users">Users</a>
          <a href="/notifications">Notifications</a>
        </nav>

        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/users" component={Users} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/posts/:id" component={PostDetails} />
        </Switch>
      </Router>
    );
  }
}

export default App;
