import React, { useState } from 'react';
import NoMemoCounter from './Counter/NoMemoCounter';
import { Logger } from './Logger/Logger';

export const BeforeYouMemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <>
      <h1>nested before you memo</h1>
      <button onClick={increment}>Increment {count}</button>

      <NoMemoCounter logger={<Logger label="no memo counter" />} />
    </>
  );
};
