"use client";
import React, { useState } from "react";

const Counter = ({ users }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>there are {users.length} users</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
