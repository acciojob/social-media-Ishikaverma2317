import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <section>
        <h1>Shopping cart</h1>
        <div className="navLinks">
          <Link to="/">Posts</Link>
          <Link to="/users">Users</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/create-post">Create Post</Link>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
