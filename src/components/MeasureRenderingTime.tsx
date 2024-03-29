import React, { ReactNode, useEffect } from 'react';

type MeasureRenderingTimeType = {
  label: string;
  children: ReactNode;
};

/**
 * コンポーネントのレンダリング時間を計測するwrapper
 */
const MeasureRenderingTime: React.FC<MeasureRenderingTimeType> = ({
  label,
  children,
}) => {
  const startTime = performance.now();

  useEffect(() => {
    const endTime = performance.now();
    const renderTime = (endTime - startTime).toFixed(2);
    console.log(`${label} is render`, renderTime, 'ms');
  }, []);

  return <>{children}</>;
};

export default MeasureRenderingTime;
