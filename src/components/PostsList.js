import React, { useState } from "react";

function PostsList() {
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    setPosts([
      {
        id: 1,
        title: "Test Title",
        content: "Test Content",
      },
    ]);
  };

  return (
    <section className="posts-list">
      {/* :nth-child(1) */}
      <div>
        <input id="postTitle" />
        <select id="postAuthor">
          <option value="1">1</option>
        </select>
        <textarea id="postContent"></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>

      {/* :nth-child(2) */}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            {/* 5 reaction buttons */}
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>0</button>

            {/* Cypress selector needs this */}
            <a className="button" href={`/posts/${post.id}`}>
              Edit
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostsList;
