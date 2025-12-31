import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
