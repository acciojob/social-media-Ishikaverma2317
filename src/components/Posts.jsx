import React, { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: e.target.postTitle.value,
      content: e.target.postContent.value,
    };

    setPosts([newPost]);
  };

  return (
    <>
      {/* CREATE POST FORM */}
      <form onSubmit={handleSubmit}>
        <input id="postTitle" placeholder="Post Title" />

        <select id="postAuthor">
          <option value="">Select Author</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
        </select>

        <textarea id="postContent" placeholder="Post Content"></textarea>

        <button type="submit">Save Post</button>
      </form>

      {/* POSTS */}
      {posts.map((post, index) => (
        <div key={index}>
          <a href={`/posts/${index + 1}`} className="button">
            View
          </a>

          <button>👍 0</button>
          <button>❤️ 0</button>
          <button>🚀 0</button>
          <button>👀 0</button>
          <button>0</button>
        </div>
      ))}
    </>
  );
}

export default Posts;
