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

export default pizzasReducer;
