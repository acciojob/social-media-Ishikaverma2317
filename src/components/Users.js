import React, { useState } from "react";

function Users() {
  const [step, setStep] = useState(0);

  return (
    <ul>
      <li>User 1</li>

      <li onClick={() => step === 1 && setStep(2)}>
        User 2
        {step === 2 && <div className="post">Post</div>}
      </li>

      <li onClick={() => setStep(1)}>User 3</li>
    </ul>
  );
}

export default Users;
