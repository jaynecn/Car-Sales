import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';

const AddedFeature = props => {
  const { feature, removeFeature } = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(feature)} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
  actionCreators, // we get all action creators through props (9)
)(AddedFeature);
