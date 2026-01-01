import React, { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPost = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        id: Date.now(),
        title,
        body,
        reactions: [0, 0, 0, 0],
      },
    ]);
    setTitle("");
    setBody("");
  };

  const react = (postId, index) => {
    setPosts(
      posts.map((p) =>
        p.id === postId
          ? {
              ...p,
              reactions: p.reactions.map((r, i) =>
                i === index ? r + 1 : r
              ),
            }
          : p
      )
    );
  };

  return (
    <div className="posts-list">
      {/* CREATE POST */}
      <form onSubmit={addPost}>
        <input
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="postBody"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>

      {/* POSTS */}
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>

          {post.reactions.map((count, i) => (
            <button key={i} onClick={() => react(post.id, i)}>
              {count}
            </button>
          ))}

          <button className="button">Edit</button>
        </div>
      ))}
    </div>
  );
}
