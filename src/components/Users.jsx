import React from "react";

export default function Users() {
  const users = ["Ishika", "Rahul", "Amit"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
