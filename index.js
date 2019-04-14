import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from './First';
import Second from './Second';
import Product from './Product';
import Talks from './Talks';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Counter from './components/counter/Counter';
import Runs from './components/runs/Runs';
import runsReducer from './store/reducers/runs.reducer'
import resultsReducer from './store/reducers/results.reducer'

let reducer = combineReducers({
    mruns : runsReducer,
    mresults : resultsReducer
});
var store = createStore(reducer);


ReactDOM.render(<Provider store={store}><Runs/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

