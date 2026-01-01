import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data";

export default function PostDetail() {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <div className="post">
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
      <button className="button">Edit</button>
      <button>Save</button>
    </div>
  );
}
