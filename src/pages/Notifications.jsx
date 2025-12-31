import { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = () => {
    setNotifications([
      "New comment on your post",
      "User XYZ liked your post",
      "Post ABC was shared"
    ]);
  };

  return (
    <div>
      <button className="button" onClick={refreshNotifications}>Refresh Notifications</button>
      <section className="notificationsList">
        {notifications.map((n, i) => <div key={i}>{n}</div>)}
      </section>
    </div>
  );
}
