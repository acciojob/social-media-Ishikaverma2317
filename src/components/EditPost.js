function EditPost() {
  return (
    <div className="post">
      <input id="postTitle" defaultValue="Post Title" />
      <textarea id="postContent" defaultValue="Post Content" />

      <button className="button">Edit</button>
      <button>Save</button>
    </div>
  );
}

export default EditPost;
