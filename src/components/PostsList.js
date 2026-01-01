import React, { useState } from "react";
import { posts as initialPosts, users } from "../data";

export default function PostsList() {
  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const addPost = () => {
    setPosts([
      ...posts,
      {
        id: Date.now().toString(),
        title,
        content,
        user: author,
        reactions: { like: 0, heart: 0, rocket: 0, coffee: 0 }
      }
    ]);
  };

  return (
    <>
      <form>
        <input id="postTitle" onChange={e => setTitle(e.target.value)} />
        <select id="postAuthor" onChange={e => setAuthor(e.target.value)}>
          <option />
          {users.map(u => (
            <option key={u.id}>{u.name}</option>
          ))}
        </select>
        <textarea id="postContent" onChange={e => setContent(e.target.value)} />
        <button type="button" onClick={addPost}>Save Post</button>
      </form>

      <section className="posts-list">
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>

            {Object.keys(post.reactions).map(r => (
              <button key={r}>{post.reactions[r]}</button>
            ))}

            <button>0</button>
            <a className="button" href={`/posts/${post.id}`}>Edit</a>
          </div>
        ))}
      </section>
    </>
  );
}
