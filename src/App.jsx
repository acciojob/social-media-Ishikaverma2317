import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import Notifications from './pages/Notifications';
import PostDetails from './pages/PostDetails';
import Posts from './pages/Posts'; // updated


function App() {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
