import * as types from './actionTypes';

const carState = {
  additionalPrice: 0,
  price: 26395,
  name: '2019 Ford Mustang',
  image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  features: []
};

export function carReducer(state = carState, action) {
  switch (action.type) {
    case types.CAR_INFO:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state;
  }
}

const storeState = [
  { id: 1, name: 'V-6 engine', price: 1500 },
  { id: 2, name: 'Racing detail package', price: 1500 },
  { id: 3, name: 'Premium sound system', price: 500 },
  { id: 4, name: 'Rear spoiler', price: 250 }
]

export function storeReducer(state = storeState, action) {
  switch (action.type) {
    case types.ON_CLICK:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state;
  }
}