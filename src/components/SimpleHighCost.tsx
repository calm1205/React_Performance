import React from 'react';

type SimpleHighCostType = {
  cost: number;
};

/**
 * 簡易的に作成した高負荷コンポーネント
 */
export const SimpleHighCost: React.FC<SimpleHighCostType> = ({ cost }) => {
  const data = [...Array(cost).keys()];
  data.map(() => console.log('Rendered HighCost!'));
  return <></>;
};
