// App.js
import React, { useState } from "react";
import "./styles/App.css"; 

const initialPosts = [
  {
    id: 1,
    title: "First Post",
    content: "Hello World",
    reactions: { like: 0, dislike: 0 },
  },
  {
    id: 2,
    title: "Second Post",
    content: "React App",
    reactions: { like: 0, dislike: 0 },
  },
];

const users = ["Ishika", "Aman", "Rohit"];

export default function App() {
  const [tab, setTab] = useState("home");
  const [posts, setPosts] = useState(initialPosts);

  const likePost = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id
          ? { ...p, reactions: { ...p.reactions, like: p.reactions.like + 1 } }
          : p
      )
    );
  };

  const dislikePost = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id
          ? {
              ...p,
              reactions: { ...p.reactions, dislike: p.reactions.dislike + 1 },
            }
          : p
      )
    );
  };

  return (
    <div>
      <h1>Social Media App</h1>

      {/* NAVBAR */}
      <nav>
        <a href="#" onClick={() => setTab("home")}>Home</a>
        <a href="#" onClick={() => setTab("users")}>Users</a>
        <a href="#" onClick={() => setTab("notifications")}>Notifications</a>
      </nav>

      {/* HOME */}
      {tab === "home" && (
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button className="button" onClick={() => likePost(post.id)}>
                Like
              </button>
              <button className="button" onClick={() => dislikePost(post.id)}>
                Dislike
              </button>
              <button className="button">Edit</button>
            </div>
          ))}
        </div>
      )}

      {/* USERS */}
      {tab === "users" && (
        <ul>
          {users.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      )}

      {/* NOTIFICATIONS */}
      {tab === "notifications" && (
        <div>
          <button className="button">Refresh Notifications</button>
        </div>
      )}
    </div>
  );
}
