import React from "react";

function Users() {
  return (
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>

      <li>
        <ul>
          <li></li>
          <li>
            <div className="post"></div>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Users;
