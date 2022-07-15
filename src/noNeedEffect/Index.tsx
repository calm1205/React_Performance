import React from 'react';
import { BadEffect } from './BadEffect';
import { GoodEffect } from './GoodEffect';

export const NoNeedEffect: React.FC = () => {
  return (
    <>
      <h1>Bad useEffect</h1>
      <BadEffect />

      <br />

      <h1>Good useEffect</h1>
      <GoodEffect />
    </>
  );
};
