import React from "react";
import { Switch, Route } from "react-router-dom";
import PostsList from "./PostsList";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";

function App() {
  return (
    <div className="App">
      <h1>GenZ</h1>

      {/* MUST ALWAYS EXIST */}
      <a href="/">Posts</a>
      <a href="/users">Users</a>
      <a href="/notifications">Notifications</a>

      <Switch>
        <Route exact path="/" component={PostsList} />
        <Route path="/users" component={Users} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/posts/:postId" component={PostDetails} />
      </Switch>
    </div>
  );
}

export default App;
