import React from "react";
import Posts from "./Posts";

function PostsList() {
  return (
 <section class="posts-list">
  <h2>Posts</h2>        ← first child
  <div>                ← second child
    <article>          ← post
      <a class="button">View</a>
      <button>👍</button>
      <button>❤️</button>
      <button>🚀</button>
      <button>👀</button>
    </article>
  </div>
</section>

  );
}

export default PostsList;
