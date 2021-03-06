import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index.js';
import App from './components/app.js';

const mystore = createStore(allReducers);

ReactDOM.render(<Provider store={mystore}>
    <App/>
</Provider>,document.getElementById('root'));
