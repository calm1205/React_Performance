import React, { useState } from 'react';

type LoggerType = { label: string };
const Logger: React.FC<LoggerType> = ({ label }) => {
  console.log(`${label} is renderd.`);
  return null;
};

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <button onClick={increment}>The count is {count}</button>
      <Logger label="カウンター" />
    </>
  );
};

export default Counter;
