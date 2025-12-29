import { useState } from "react";

function Notifications() {
  const [show, setShow] = useState(false);

  return (
    <section className="notificationsList">
      <button className="button" onClick={() => setShow(true)}>
        Refresh Notifications
      </button>

      {show && <div>New Notification</div>}
    </section>
  );
}

export default Notifications;
