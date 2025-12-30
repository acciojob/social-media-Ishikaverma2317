import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "./PostsList";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";

function App() {
  return (
    <div className="App">
      <h1>GenZ</h1>

      <nav>
        <a href="/">Posts</a>
        <a href="/users">Users</a>
        <a href="/notifications">Notifications</a>
      </nav>

      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
