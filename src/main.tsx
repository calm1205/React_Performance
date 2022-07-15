import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Memo } from '~/memo/Index';
import { BeforeYouMemo } from './beforeYouMemo/Index';
import { Router } from './router';
import { HighCost } from './components/HighCost';
import MeasureRenderingTime from './components/MeasureRenderingTime';
import { NoNeedEffect } from './noNeedEffect/Index';

const rootDOM = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/beforeYouMemo" element={<BeforeYouMemo />} />
        <Route path="/noNeedEffect" element={<NoNeedEffect />} />
        <Route
          path="/highCost"
          element={
            <MeasureRenderingTime label="high cost">
              <HighCost />
            </MeasureRenderingTime>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootDOM
);
