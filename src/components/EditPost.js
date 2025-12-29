import { useState } from "react";

function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="post">
      <input id="postTitle" onChange={e => setTitle(e.target.value)} />
      <textarea id="postContent" onChange={e => setContent(e.target.value)} />
      <button className="button">Save Post</button>
    </div>
  );
}

export default EditPost;
