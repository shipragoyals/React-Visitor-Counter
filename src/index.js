import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "./css/style.css";
import { CookiesProvider } from 'react-cookie';

import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <>
<BrowserRouter>
  <CookiesProvider >
    <App />
    </CookiesProvider>
    </BrowserRouter>
    </>
 ,
  document.getElementById('root')
);


