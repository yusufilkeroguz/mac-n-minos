import fetch from 'isomorphic-fetch';

export const pizzasReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return [
        ...state,
        ...action.pizzas,
      ];
    default:
      return state;
  }
};

export const setPizzas = pizzas => ({ type: 'SET_PIZZAS', pizzas });

export const fetchPizzas = (callback) => {
  fetch('http://localhost:3001/pizza-list')
    .then(response => response.json())
    .then(callback);
};

export default pizzasReducer;
