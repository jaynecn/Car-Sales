import * as types from './actionTypes';

export function onClick(target) {
  return {
    type: types.ON_CLICK,
    payload: {
      id: target.id,
      name: target.name,
      price: target.price,
    }
  }
}

export function carInfo() {
  return { type: types.CAR_INFO };
}