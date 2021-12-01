import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormHandling from './FormHandling'
import RefExamples from './RefExamples'
import UserDetailsForm from "./FormAssignment/userDetailsForm"
import Timer from "./timer/Timer"

ReactDOM.render(
  <React.StrictMode>
    <Timer init = {0} end = {10} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
