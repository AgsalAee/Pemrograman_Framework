// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Tugas from "./Tugas";
// import App from "./App"
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Tugas/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer'
import App from './App'
import Table from './containers/Table'
import CreateTodo from './containers/CreateTodo'
import registerServiceWorker from './registerServiceWorker'
const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore)(MainReducer)
ReactDOM.render(
  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()