import { useState } from "react";

function Post() {
  const [likes, setLikes] = useState(0);
  const [heart, setHeart] = useState(0);
  const [wow, setWow] = useState(0);
  const [rocket, setRocket] = useState(0);

  return (
    <div className="post">
      <h3>Post Title</h3>
      <p>Post content</p>

      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <button onClick={() => setHeart(heart + 1)}>❤️ {heart}</button>
      <button onClick={() => setWow(wow + 1)}>😮 {wow}</button>
      <button onClick={() => setRocket(rocket + 1)}>🚀 {rocket}</button>
      <button>🎉 0</button>

      <a className="button" href="/posts/1">Edit</a>
    </div>
  );
}

export default Post;
