import React from "react";

function PostsList() {
  return (
    <section className="posts-list">
      <div>
        <input id="postTitle" />
        <select id="postAuthor">
          <option>User 1</option>
        </select>
        <textarea id="postContent"></textarea>
        <button>Add Post</button>
      </div>

      <div>
        <div className="post">
          <h3>Test Post</h3>
          <p>Test Content</p>

          <button>0</button>
          <button>0</button>
          <button>0</button>
          <button>0</button>
          <button>0</button>

          <a className="button" href="/posts/1">Edit</a>
        </div>
      </div>
    </section>
  );
}

export default PostsList;
