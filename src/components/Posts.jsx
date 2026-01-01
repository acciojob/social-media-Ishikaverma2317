import React, { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello World",
      content: "First post",
      reactions: [0, 0, 0, 0, 0],
    },
  ]);

  const addReaction = (postId, index) => {
    if (index === 4) return; // last button no change

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
      <div>Create Post Section</div>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>

          <div>
            {post.reactions.map((count, i) => (
              <button
                key={i}
                onClick={() => addReaction(post.id, i)}
              >
                {count}
              </button>
            ))}
          </div>

          <button className="button">Edit</button>
        </div>
      ))}
    </div>
  );
}
