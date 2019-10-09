import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const AdditionalFeature = props => {
  const { feature, buyItem } = props;
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => buyItem(feature)} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(AdditionalFeature);
