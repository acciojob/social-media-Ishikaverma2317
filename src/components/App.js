import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PostsList from "./PostsList";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetail from "./PostDetail";


function App() {
  return (
    <div className="App">
      <h1>GenZ</h1> {/* REQUIRED */}
      <Navbar />

      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
 
