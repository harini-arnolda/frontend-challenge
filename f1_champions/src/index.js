import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';
import initialState from './reducers/InitialState';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
