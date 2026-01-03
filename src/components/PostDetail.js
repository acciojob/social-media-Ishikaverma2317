import { useParams } from "react-router-dom";
import { useState } from "react";

function PostDetail() {
  const { postId } = useParams();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("Post Title");
  const [content, setContent] = useState("Post Content");

  return (
    <div className="post">
      {edit ? (
        <>
          <input
            id="postTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            id="postContent"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <button onClick={() => setEdit(false)}>Save</button>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <p>{content}</p>
          <button className="button" onClick={() => setEdit(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default PostDetail;
