import React from 'react';

const DELAY_TIME = 300; /** 遅延時間 */

export const Delay: React.FC = () => {
  const now = performance.now();
  while (performance.now() - now < DELAY_TIME) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component.</p>;
};
