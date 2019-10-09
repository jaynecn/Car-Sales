import React from 'react';
import {connect} from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const { state } = props;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {state.car.features.length ? (
        <ol type="1">
          {state.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
   // we get all action creators through props (9)
)(AddedFeatures);
