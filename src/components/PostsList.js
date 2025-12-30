import React, { useState } from "react";

function PostsList() {
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    setPosts([
      ...posts,
      {
        id: 1,
        title: "Post Title",
        content: "Post Content",
      },
    ]);
  };

  return (
    <section className="posts-list">
      {/* CREATE POST */}
      <div>
        <input id="postTitle" />
        <select id="postAuthor">
          <option value="1">User 1</option>
        </select>
        <textarea id="postContent"></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>

      {/* POSTS CONTAINER */}
      <div>
        {posts.map((p) => (
          <div key={p.id} className="post">
            <h3>{p.title}</h3>
            <p>{p.content}</p>

            {/* 5 reaction buttons */}
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>1</button>
            <button>0</button>

            {/* EDIT BUTTON */}
            <a className="button" href={`/posts/${p.id}`}>
              Edit
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostsList;
