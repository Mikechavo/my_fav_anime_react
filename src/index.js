import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom"; // Import HashRouter instead of BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <HashRouter> {/* Use HashRouter instead of BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
