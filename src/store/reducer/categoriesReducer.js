// const defaultState = [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing",
// ];

const defaultState = [];
const CATEGORIES_LOAD = "CATEGORIES_LOAD";

export const categoriesLoadAction = (payload) => ({
  type: CATEGORIES_LOAD,
  payload,
});

export const categoriesReducer = (state = defaultState, action) => {
  if (action.type === CATEGORIES_LOAD) {
    return action.payload;
  }
  return state;
};
