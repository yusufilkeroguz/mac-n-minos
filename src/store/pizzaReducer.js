const initialState = {
  pizzas: null,
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        pizzas: action.pizzas,
      };
    case 'GET_PIZZAS':
      return state.pizzas;
    default:
      return state;
  }
};

export const setPizzas = pizzas => ({ type: 'SET_PIZZAS', pizzas });

export const getPizzas = _ => ({ type: 'GET_PIZZAS' });
