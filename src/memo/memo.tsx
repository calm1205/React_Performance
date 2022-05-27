import React, { memo, useState } from 'react';

export const Parent = () => {
  const [state, setState] = useState(false);
  const onClick = () => setState(!state);

  console.log('parent rendered.');

  return (
    <>
      <button onClick={onClick}>render</button>
      <Child log="child" />
      <MemoChild log="memo child" />
    </>
  );
};

const Child = ({ log }: { log: string }) => {
  console.log('rendered.', log);
  return <></>;
};

const MemoChild = memo(Child);
