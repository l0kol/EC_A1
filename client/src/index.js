import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import {ContextWrapper} from "./Context/context";
import "./fonts/DOS.ttf"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>
);


reportWebVitals();
