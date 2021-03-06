import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router } from 'react-router-dom';
import {createStore} from 'redux';
import Reducer from './redux/reducers/Reducer';
import{composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';




const  store=createStore(Reducer,composeWithDevTools())




ReactDOM.render(
  <Provider store={store}>
     <Router>
    <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

