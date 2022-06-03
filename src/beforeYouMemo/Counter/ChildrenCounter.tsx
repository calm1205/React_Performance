import React, { useState } from 'react';

const Counter: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <button onClick={increment}>Children Counter {count}</button>
      {children}
    </>
  );
};

export default Counter;
