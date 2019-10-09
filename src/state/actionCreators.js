import * as types from './actionTypes';

const removeFeature = item => {
  return {
    type: types.REMOVE_FEATURE
  };
  // dispatch an action here to remove an item
};

const buyItem = item => {
  return {
    type: types.ADD_FEATURE
  };
  // dipsatch an action here to add an item
};

// export function onClick(target) {
//   return {
//     type: types.ON_CLICK,
//     payload: {
//       id: target.id,
//       name: target.name,
//       price: target.price,
//     }
//   }
// }

// export function carInfo() {
//   return { type: types.CAR_INFO };
// }