import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { stores, StoresProvider } from './context-stores';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoresProvider value={stores}>
    <App />
  </StoresProvider>
);

