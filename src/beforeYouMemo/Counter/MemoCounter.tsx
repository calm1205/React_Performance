import React, { useState } from 'react';
import MemoLogger from '../Logger/MemoLogger';

/**
 * memo化されたLogger
 */
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <button onClick={increment}>Memo Counter {count}</button>
      <MemoLogger label="counter" />
    </>
  );
};

export default Counter;
