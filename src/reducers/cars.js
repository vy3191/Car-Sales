 import { ADD_ITEM, REMOVE_ITEM } from '../actions/car';

 const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export function reducer(state=initialState, action) {
    switch(action.type) {
      case ADD_ITEM:
        return {
          ...state,         
          car: {
            ...state.car,
            price: state.car.price + action.payload.price,
            features:[...state.car.features, ...state.additionalFeatures.filter(item => item.id === action.payload.id)]
          },
          // features: [...state.car.features, state.additionalFeatures.filter(item => item.id === action.payload) ]
          // additionalPrice: state.additionalFeatures.filter(item => item.id === action.payload).reduce((pre,curr) => { return pre.price + curr.price},state.additionalPrice)

        }
      case REMOVE_ITEM:
        return {
          ...state,
         car: {
           ...state.car,
           price:state.car.price - action.payload.price,
          features: [...state.car.features.filter(item => item.id !== action.payload.id)]}
        }  
      default:
       return state;
    }
}