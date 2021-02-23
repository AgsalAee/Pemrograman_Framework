import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from "register-service-worker";
import Login from './component/Login';
// import { render } from '@testing-library/react';
// import Statefull from './component/Statefull';
// import Stateless from './component/Stateless';
// import App from './App';
// import List from './component/List';
//import Test from './component/Test';
//import HelloComponent from './component/HelloComponent';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Login/>
    {/* <Statefull/>
    <Stateless/> */}
    {/* <App/> */}
    {/* <Test/> */}
    {/* <HelloComponent/> */}
    </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();