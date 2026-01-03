import Posts from "./Posts";

function PostsList() {
  return (
    <section className="posts-list">
      <div></div> {/* nth-child(1) empty */}
      <Posts />    {/* nth-child(2) */}
    </section>
  );
}

export default PostsList;
