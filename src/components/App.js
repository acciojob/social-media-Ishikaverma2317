import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import PostsList from "./PostsList";
import PostDetail from "./PostDetail";
import Users from "./Users";
import Notifications from "./Notifications";

export default function App() {
  return (
    <BrowserRouter>
  <h1>GenZ</h1>
  <div className="App">
    <Navbar />

    <Switch>
      <Route exact path="/" component={PostsList} />
      <Route path="/posts/:postId" component={PostDetail} />
      <Route path="/users" component={Users} />
      <Route path="/notifications" component={Notifications} />
    </Switch>
  </div>
</BrowserRouter>
  );
}
