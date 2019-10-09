import React from 'react';
import {connect} from 'react-redux';

const Total = props => {
  console.log(props);
  const { state } = props;
  // debugger
  return (
    <div className="content">
      <h4>Total Amount: ${state.car.price + state.additionalPrice}</h4>
    </div>
  );
};

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
   // we get all action creators through props (9)
)(Total);
