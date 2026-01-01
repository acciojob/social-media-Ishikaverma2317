import React from "react";
import { users, posts } from "../data";

export default function Users() {
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          <ul>
            {posts
              .filter(p => p.user === u.name)
              .map(p => (
                <li key={p.id}>
                  <div className="post">{p.title}</div>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
