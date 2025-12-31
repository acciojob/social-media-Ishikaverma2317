import React, { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Hello World", likes: 0 }
  ]);

  const addPost = () => {
    setPosts([...posts, { id: Date.now(), text: "New Post", likes: 0 }]);
  };

  const likePost = (id) => {
    setPosts(
      posts.map(p =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  return (
    <div>
      {/* FORM */}
      <form>
        <button type="button" onClick={addPost}>Add Post</button>
      </form>

      {/* POSTS */}
      {posts.map(post => (
        <div className="post" key={post.id}>
          <p>{post.text}</p>
          <button onClick={() => likePost(post.id)}>Like</button>
          <span>{post.likes}</span>
        </div>
      ))}
    </div>
  );
}
