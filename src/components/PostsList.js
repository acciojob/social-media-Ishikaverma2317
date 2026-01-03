import React from "react";
import Posts from "./Posts";

function PostsList() {
  return (
    <section className="posts-list">
      <h2>Posts</h2>

      <div>
        <Posts />
      </div>
    </section>
  );
}

export default PostsList;
