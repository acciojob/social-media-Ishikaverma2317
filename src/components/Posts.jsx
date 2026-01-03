import React from "react";
import { useState } from "react";
import { users } from "../data";

function Posts() {
  const [posts, setPosts] = useState([]);

  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title: e.target.postTitle.value,
      content: e.target.postContent.value,
      reactions: [0, 0, 0, 0, 0]
    };

    setPosts([...posts, newPost]);
  };

  return (
    <>
      <form onSubmit={addPost}>
        <input id="postTitle" />
        <select id="postAuthor">
          {users.map(u => (
            <option key={u.id}>{u.name}</option>
          ))}
        </select>
        <textarea id="postContent"></textarea>
        <button type="submit">Save</button>
      </form>

      {posts.map(post => (
        <div key={post.id}>
          <a href={`/posts/${post.id}`} className="button">View</a>

          {post.reactions.map((r, i) => (
            <button
              key={i}
              onClick={() => {
                if (i < 4) {
                  const updated = [...posts];
                  updated.find(p => p.id === post.id).reactions[i]++;
                  setPosts(updated);
                }
              }}
            >
              {r}
            </button>
          ))}
        </div>
      ))}
    </>
  );
}

export default Posts;
