import React from 'react';
import ReactDOM from 'react-dom/client';
// Router Browser utils
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
// Reactstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Router Browser*/}
    <Router>
      {/* App Component */}
      <App />
    </Router>
  </React.StrictMode>
);

