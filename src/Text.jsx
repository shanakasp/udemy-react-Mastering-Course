import React, { useState } from "react";

const Text = () => {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }

  function decrease() {
    setcount(count - 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Click to increase</button>
      <button onClick={decrease}>Click to decrease</button>
    </div>
  );
};

export default Text;
