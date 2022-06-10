import React, { memo } from 'react';

type LoggerType = { label: string };

const Logger: React.FC<LoggerType> = ({ label }) => {
  console.log(`${label} is renderd.`);
  return null;
};

export default memo(Logger);
