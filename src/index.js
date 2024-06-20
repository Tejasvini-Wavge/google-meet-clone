import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App/App'
import reportWebVitals from './views/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();