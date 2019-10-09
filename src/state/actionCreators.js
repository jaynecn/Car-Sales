import * as types from './actionTypes';

export const removeFeature = item => {
  return {
    type: types.REMOVE_FEATURE
  };
  // dispatch an action here to remove an item
};

export const buyItem = item => {
  return {
    type: types.ADD_FEATURE,
    payload: { id: item.id, name: item.name, price: item.price },

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