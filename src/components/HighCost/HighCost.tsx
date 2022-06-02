import React from 'react';

/**
 * 擬似的に作成したレンダリングコストの高いコンポーネント
 */
const HighCost: React.FC = () => {
  const startTime = performance.now();

  const data = [...Array(1000).keys()];
  data.map(() => console.log('Rendered HighCost!'));

  const endTime = performance.now();
  const renderTime = (endTime - startTime).toFixed(2);
  console.log('render', renderTime, 'ms');

  return <h2>render</h2>;
};

export default HighCost;
