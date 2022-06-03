import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Memo } from '~/memo/Index';
import { BeforeYouMemo } from './beforeYouMemo/Index';
import { Router } from './router';

const rootDOM = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/beforeYouMemo" element={<BeforeYouMemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootDOM
);
