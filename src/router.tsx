import React from 'react';
import { Link } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <>
      <Link to="/memo">memo</Link>
      <br />
      <Link to="/beforeYouMemo">beforeYouMemo</Link>
      <br />
      <Link to="/highCost">{"Dan's High cost components"}</Link>
    </>
  );
};
