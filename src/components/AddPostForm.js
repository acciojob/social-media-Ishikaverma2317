import { useState } from "react";

function AddPostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  function onSavePost() {
    setPosts([
      ...posts,
      {
        title,
        content,
        author,
        reactions: [0, 0, 0, 0, 0],
      },
    ]);
  }

  return (
    <section>
      <input id="postTitle" onChange={e => setTitle(e.target.value)} />
      <select id="postAuthor" onChange={e => setAuthor(e.target.value)}>
        <option></option>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
        <option value="user3">User 3</option>
      </select>
      <textarea id="postContent" onChange={e => setContent(e.target.value)} />
      <button onClick={onSavePost}>Save Post</button>
    </section>
  );
}

export default AddPostForm;
