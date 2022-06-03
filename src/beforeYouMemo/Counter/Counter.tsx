import React, { useState } from 'react';
import { Logger } from '../Logger/Logger';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <button onClick={increment}>Base Counter {count}</button>
      <Logger label="base counter" />
    </>
  );
};

export default Counter;
