import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import Reducer1 from './Reducers/Reducer1';
import NameReducer from './Reducers/NameReducer';
import WishReducer from './Reducers/WishReducer';


const masterReducer = combineReducers({
    name:NameReducer,
    wish:WishReducer
})
//const store = createStore(Reducer1, applyMiddleware(thunk))
const store = createStore(masterReducer, {name:"suresh", wish:['eat','sleep']},applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
