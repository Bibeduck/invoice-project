import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import './index.css';
import App from './App';

const enhancers = [applyMiddleware(thunk)];
const composeEnhancers =
        process.env.NODE_ENV !== "production" &&
        typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

const store = createStore(reducers, composeEnhancers(...enhancers));
const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);