import React, { useState } from "react";

function PostDetails() {
  const [title, setTitle] = useState("Edited Title");
  const [content, setContent] = useState("Edited Content");

  return (
    <div className="post">
      <input id="postTitle" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={e=>setContent(e.target.value)} />

      <button className="button">Edit</button>
      <button>Save</button>
    </div>
  );
}

export default PostDetails;
