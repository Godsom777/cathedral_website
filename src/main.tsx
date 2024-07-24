import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp();