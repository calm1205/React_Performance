import React, { useState } from 'react';
import HighCost from '../HighCost/HighCost';

export default function App() {
  const [state, setState] = useState(0);
  const onClick = () => setState((old) => old + 1);

  return (
    <div>
      <h1 onClick={onClick}>hello world {state}</h1>
      <HighCost />
    </div>
  );
}
