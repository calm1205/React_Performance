import React from 'react';

/**
 * 擬似的に作成したレンダリングコストの高いコンポーネント
 */
export const HighCost: React.FC = () => {
  const data = [...Array(10000).keys()];
  data.forEach(() => {
    console.log('Rendered HighCost!');
  });
  return <></>;
};
