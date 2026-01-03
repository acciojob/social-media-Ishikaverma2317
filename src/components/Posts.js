import React, { useState } from "react";

function Posts() {
  const [showPost, setShowPost] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPost(true);
  };

  return (
    <>
      {/* 1st child */}
      <form onSubmit={handleSubmit}>
        <input id="postTitle" />
        <select id="postAuthor">
          <option>User 1</option>
          <option>User 2</option>
          <option>User 3</option>
        </select>
        <textarea id="postContent"></textarea>
        <button type="submit">Save Post</button>
      </form>

      {/* 2nd child */}
      <div></div>

      {/* 3rd child */}
      <div></div>

      {/* 4th child (IMPORTANT) */}
      {showPost && (
        <div>
          <a href="/posts/1" className="button">
            View
          </a>

          <button>👍</button>
          <button>❤️</button>
          <button>🚀</button>
          <button>👀</button>
          <button>0</button>
        </div>
      )}
    </>
  );
}

export default Posts;
