import React from 'react';
import Counter from './Counter/Counter';
import NoMemoCounter from './Counter/NoMemoCounter';
import MemoCounter from './Counter/MemoCounter';
import { Logger } from './Logger/Logger';

export const BeforeYouMemo: React.FC = () => {
  return (
    <>
      <Counter />
      <MemoCounter />
      <NoMemoCounter logger={<Logger label="no memo counter" />} />
    </>
  );
};
