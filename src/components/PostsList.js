import { useState } from "react";
import AddPostForm from "./AddPostForm";
import Post from "./Post";

function PostsList() {
  const [posts, setPosts] = useState([]);

  return (
    <section className="posts-list">
      <AddPostForm setPosts={setPosts} posts={posts} />
      <div>
        {posts.map((post, index) => (
          <Post key={index} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}

export default PostsList;
