import { useNavigate } from 'react-router-dom';
import ReactionButtons from './ReactionButtons';

export default function Post({ post }) {
  const navigate = useNavigate();

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p><b>Author:</b> {post.author}</p>
      <p>{post.content}</p>
      <ReactionButtons />
      <button className="button" onClick={() => navigate(`/posts/${post.id}`)}>Edit</button>
    </div>
  );
}
