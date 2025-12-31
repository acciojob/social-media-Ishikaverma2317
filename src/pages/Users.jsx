import { usersData, postsData } from '../data';
import { useState } from 'react';

export default function Users() {
  const [selectedUser, setSelectedUser] = useState(null);
  const userPosts = postsData.filter(p => p.author === selectedUser);

  return (
    <div>
      <ul>
        {usersData.map(u => <li key={u.id} onClick={() => setSelectedUser(u.name)}>{u.name}</li>)}
      </ul>
      {userPosts.map(p => (
        <div className="post" key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
