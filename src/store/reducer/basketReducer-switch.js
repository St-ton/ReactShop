const defaultState = JSON.parse(localStorage.getItem("basket")) ?? [];

const writeToLocalstorage = (basket) =>
  localStorage.setItem("basket", JSON.stringify(basket));

const BASKET_DECREMENT = "BASKET_DECREMENT";
const BASKET_INCREMENT = "BASKET_INCREMENT";
const BASKET_ADD = "BASKET_ADD";
const BASKET_DEL = "BASKET_DEL";
const BASKET_CLEAR = "BASKET_CLEAR";

export const basketIncrementAction = (payload) => ({
  type: BASKET_INCREMENT,
  payload,
});

export const basketDecrementAction = (payload) => ({
  type: BASKET_DECREMENT,
  payload,
});

export const basketAddAction = (payload) => ({
  type: BASKET_ADD,
  payload,
});

export const basketDelAction = (payload) => ({
  type: BASKET_DEL,
  payload,
});

export const basketClearAction = (payload) => ({
  type: BASKET_CLEAR,
});

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BASKET_INCREMENT: {
      const product = state.find(({ id }) => id === action.payload);
      product.count++;
      writeToLocalstorage(state);
      return [...state];
    }
    case BASKET_DECREMENT: {
      const product = state.find(({ id }) => id === action.payload);
      product.count--;
      console.log(product.count);
      writeToLocalstorage(state);
      if (product.count === 0) {
        const newState = state.filter((item) => item !== product);
        writeToLocalstorage(newState);
        return newState;
      }
      return [...state];
    }
    case BASKET_ADD: {
      const product = state.find(({ id }) => id === action.payload);
      if (product === undefined) {
        const newState = [...state, { id: action.payload, count: 1 }];
        writeToLocalstorage(newState);
        return newState;
      } else {
        product.count++;
        writeToLocalstorage(state);
        return [...state];
      }
    }
    case BASKET_DEL: {
      const newState = state.filter(({ id }) => id !== action.payload);
      writeToLocalstorage(newState);
      return newState;
    }
    case BASKET_CLEAR: {
      writeToLocalstorage([]);
      return [];
    }
    default:
      return state;
  }
};
