import Post from "./Post";

function PostsList() {
  return (
    <section className="posts-list">
      <AddPostForm />

      <div>
        <Post />
      </div>
    </section>
  );
}

export default PostsList;
