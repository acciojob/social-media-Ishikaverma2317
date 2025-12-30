import React, { useState } from "react";

function Users() {
  const [showSecond, setShowSecond] = useState(false);
  const [showPost, setShowPost] = useState(false);

  return (
    <ul>
      <li>User 1</li>

      <li onClick={() => showSecond && setShowPost(true)}>
        User 2
        {showPost && <div className="post">Post</div>}
      </li>

      <li onClick={() => setShowSecond(true)}>User 3</li>
    </ul>
  );
}

export default Users;
