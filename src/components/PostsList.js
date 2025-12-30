import React, { useState } from "react";

const initialPosts = [
  { id: 1, title: "Hello World", content: "First post", reactions: [0,0,0,0,0] }
];

function PostsList() {
  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    const newPost = {
      id: Date.now(),
      title,
      author,
      content,
      reactions: [0,0,0,0,0]
    };
    setPosts([...posts, newPost]);
  };

  const react = (postId, index) => {
    setPosts(posts.map(p =>
      p.id === postId && index < 4
        ? { ...p, reactions: p.reactions.map((r,i)=> i===index ? r+1 : r)}
        : p
    ));
  };

  return (
    <section className="posts-list">
      {/* Create Post */}
      <div>
        <input id="postTitle" onChange={e=>setTitle(e.target.value)} />
        <select id="postAuthor" onChange={e=>setAuthor(e.target.value)}>
          <option value="">Select Author</option>
          <option value="User1">User1</option>
        </select>
        <textarea id="postContent" onChange={e=>setContent(e.target.value)} />
        <button onClick={addPost}>Add Post</button>
      </div>

      {/* Posts */}
      <div>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            {post.reactions.map((r, i) => (
              <button key={i} onClick={() => react(post.id, i)}>
                {r}
              </button>
            ))}

            <a className="button" href={`/posts/${post.id}`}>Edit</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostsList;
