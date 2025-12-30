import React, { useState } from "react";

function Notifications() {
  const [show, setShow] = useState(false);

  return (
    <section>
      <button className="button" onClick={() => setShow(true)}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {show && <div>New Notification</div>}
      </section>
    </section>
  );
}

export default Notifications;
 
