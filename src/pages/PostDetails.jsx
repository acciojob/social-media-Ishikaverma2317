import { useParams, useNavigate } from 'react-router-dom';
import { postsData } from '../data';
import { useState } from 'react';

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = postsData.find(p => p.id === +id);

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const saveEdit = () => {
    post.title = title;
    post.content = content;
    navigate('/');
  };

  return (
    <div className="post">
      <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={saveEdit}>Save</button>
    </div>
  );
}
