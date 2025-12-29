function AddPostForm() {
  return (
    <form>
      <input id="postTitle" placeholder="Post Title" />

      <select id="postAuthor">
        <option value="">Select Author</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <textarea id="postContent" />

      <button type="submit">Save Post</button>
    </form>
  );
}

export default AddPostForm;
