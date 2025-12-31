import { useState } from 'react';
import { postsData, usersData } from '../data';
import Post from '../components/Post';

export default function Home() {
  const [posts, setPosts] = useState(postsData);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const addPost = () => {
    const newPost = { id: Date.now(), title, author, content };
    setPosts([newPost, ...posts]);
    setTitle(''); setAuthor(''); setContent('');
  };

  return (
    <div>
      <div className="create-post">
        <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="">Select Author</option>
          {usersData.map(u => <option key={u.id} value={u.name}>{u.name}</option>)}
        </select>
        <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
        <button onClick={addPost}>Submit</button>
      </div>

      <div className="posts-list">
        {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}
