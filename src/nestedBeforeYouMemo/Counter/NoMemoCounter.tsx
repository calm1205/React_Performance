import React, { ReactNode, useState } from 'react';

type CounterType = {
  logger: ReactNode;
};

/**
 * before you memo
 */
const Counter: React.FC<CounterType> = ({ logger }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <button onClick={increment}>No Memo Counter {count}</button>
      {logger}
    </>
  );
};

export default Counter;
