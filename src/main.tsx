import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '~/components/pages/index';
import { Memo } from '~/memo/Index';
import { BeforeYouMemo } from './beforeYouMemo/Index';

const rootDOM = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/beforeYouMemo" element={<BeforeYouMemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootDOM
);
