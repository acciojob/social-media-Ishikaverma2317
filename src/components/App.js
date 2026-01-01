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

        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
