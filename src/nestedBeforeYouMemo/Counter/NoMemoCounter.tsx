import React, { ReactNode, useState } from 'react';
import { Delay } from '~/components/Delay';

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
      <Delay />
      {logger}
    </>
  );
};

export default Counter;
