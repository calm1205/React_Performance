import React from 'react';

type LoggerType = { label: string };

export const Logger: React.FC<LoggerType> = ({ label }) => {
  console.log(`${label} is renderd.`);
  return null;
};
