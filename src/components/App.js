import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";
import "../styles/App.css";

export default function App() {
  return (
    <Router>
      <h1>GenZ</h1>

      <nav>
        <a href="/">Posts</a>
        <a href="/users">Users</a>
        <a href="/notifications">Notifications</a>
      </nav>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
