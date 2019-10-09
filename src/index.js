import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import * as reducers from './state/reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const monsterReducer = combineReducers({
  car: reducers.carReducer,
  shop: reducers.storeReducer,
});

const store = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
 