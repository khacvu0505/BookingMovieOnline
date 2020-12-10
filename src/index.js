import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// compose : giúp đồng bộ redux dev tool và redux thunk
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
//để connect từ redeux 
import { Provider } from "react-redux";
import { rootReducers } from "./redux/reducers";



// BS4
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist//js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";






// Main CSS
import "./scss/main.scss";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
