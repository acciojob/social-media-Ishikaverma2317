import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PostsList from "./PostsList";
import UsersList from "./UsersList";
import UserPosts from "./UserPosts";
import Notifications from "./Notifications";
import AddPostForm from "./AddPostForm";
import EditPost from "./EditPost";
 
function App() {
  return (
    <div className="App">
      <h1>GenZ</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:userId" element={<UserPosts />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/addPost" element={<AddPostForm />} />
        <Route path="/posts/:postId" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
