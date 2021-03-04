import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from "register-service-worker";
import 'bootstrap/dist/css/bootstrap.min.css';
// import MahasiswaPost from './component/mahasiswa/MahasiswaPost';
import Blogpost from './component/container/blogpost/Blogpost';

ReactDOM.render(
    <React.StrictMode>
    <Blogpost/>
    </React.StrictMode>,
  document.getElementById('content')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();