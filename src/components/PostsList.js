import React from "react";

function PostsList() {
  return (
    <section className="posts-list">
      {/* FIRST CHILD */}
      <h2>Posts</h2>

      {/* SECOND CHILD */}
      <div>
        <article>
          <a href="/posts/1" className="button">
            View
          </a>

          <button>👍</button>
          <button>❤️</button>
          <button>🚀</button>
          <button>👀</button>
          <button>0</button>
        </article>
      </div>
    </section>
  );
}

export default PostsList;
