import React, { useState } from "react";

function Notifications() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShow(true)}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {show && <div>New Notification</div>}
      </section>
    </>
  );
}

export default Notifications;
