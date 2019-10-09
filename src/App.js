import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { ReactDOM } from 'react-dom';
import { connect } from 'react-redux';
import * as types from './state/actionCreators';

const App = (props) => {
  const {buyitem, car, shop} = props;

  // const monsterReducer = combineReducers({
  //   car: reducers.carReducer,
  //   shop: reducers.storeReducer,
  // });

  // const store = createStore(
  //   monsterReducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // );
  

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

// export default App;

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(App);
