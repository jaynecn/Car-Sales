import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
  const { state } = props;
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.additionalPrice}</p>
    </>
  );
};

export default connect(
  // callback that takes state and returns it (mapStateToProps)
  state => state, // we get all slices of state through props (8)
   // we get all action creators through props (9)
)(Header);
