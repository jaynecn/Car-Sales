import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { ReactDOM } from 'react-dom';

const App = (props) => {
  const {buyitem, car, shop} = props;

  const monsterReducer = combineReducers({
    car: reducers.carReducer,
    shop: reducers.storeReducer,
  });

  const store = createStore(
    monsterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.shop} />
        <Total car={props.car} additionalPrice={props.car} />
      </div>
    </div>
  );
};

export default App;
