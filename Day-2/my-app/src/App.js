import React, { useState } from "react";

export const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <div>
        <h1>i am showing brooo !</h1>
      </div>}
    </div>
  );
};
export default App;
