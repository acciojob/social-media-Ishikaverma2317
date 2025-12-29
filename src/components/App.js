import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PostsList from "./PostsList";
import UsersList from "./UsersList";
import UserPosts from "./UserPosts";
import Notifications from "./Notifications";
import EditPost from "./EditPost";

function App() {
  return (
    <Router>
      <h1>GenZ</h1>

      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:userId" element={<UserPosts />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/posts/:postId" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
