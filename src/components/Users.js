import React, { useState } from "react";

function Users() {
  const [showPost, setShowPost] = useState(false);

  return (
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li onClick={() => setShowPost(true)}>User 3</li>

      {showPost && (
        <li onClick={() => setShowPost("post")}>
          User 2
          {showPost === "post" && <div className="post">User Post</div>}
        </li>
      )}
    </ul>
  );
}

export default Users;
