import React from "react";

function PostDetails() {
  return (
    <div className="post">
      <input id="postTitle" />
      <textarea id="postContent"></textarea>

      <button className="button">Edit</button>
      <button>Save</button>
    </div>
  );
}

export default PostDetails;
