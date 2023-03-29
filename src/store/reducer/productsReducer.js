const defaultState = [];
const PRODUCTS_LOAD = "PRODUCTS_LOAD";
const PRODUCTS_SEARCH_FILTER = "PRODUCTS_SEARCH_FILTER";
const PRODUCTS_RESET_FILTER = "PRODUCTS_RESET_FILTER";
const PRODUCTS_SORT_PRICE_FILTER = "PRODUCTS_SORT_PRICE_FILTER";
const PRODUCTS_SORT_NAME_FILTER = "PRODUCTS_SORT_NAME_FILTER";
const CATEGORY_FILTER = "CATEGORY_FILTER";

export const productsLoadAction = (payload) => ({
  type: PRODUCTS_LOAD,
  payload,
});

export const productsSearchFilterAction = (payload) => ({
  type: PRODUCTS_SEARCH_FILTER,
  payload,
});

export const productsResetFilter = () => ({
  type: PRODUCTS_RESET_FILTER,
});

export const productsSortPriceFilterAction = (payload) => ({
  type: PRODUCTS_SORT_PRICE_FILTER,
  payload,
});

export const productsSortNameFilterAction = (payload) => ({
  type: PRODUCTS_SORT_NAME_FILTER,
  payload,
});

export const categoryFilterAction = (payload) => ({
  type: CATEGORY_FILTER,
  payload,
});

export const productsReducer = (state = defaultState, action) => {
  if (action.type === PRODUCTS_LOAD) {
    return action.payload.map((item) => ({ ...item, show: true }));
  } else if (action.type === PRODUCTS_SEARCH_FILTER) {
    return state.map((item) => ({
      ...item,
      show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()),
    }));
  } else if (action.type === PRODUCTS_RESET_FILTER) {
    return state.map((item) => ({ ...item, show: true }));
  } else if (action.type === PRODUCTS_SORT_PRICE_FILTER) {
    if (action.payload === "priceup") {
      return [...state].sort((a, b) => a.price - b.price);
    } else if (action.payload === "pricedown") {
      return [...state].sort((a, b) => b.price - a.price);
    }
  } else if (action.type === PRODUCTS_SORT_NAME_FILTER) {
    console.log(state);
    if (action.payload === "name-az") {
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "name-za") {
      return [...state].sort((a, b) => b.title.localeCompare(a.title));
    }
  } else if (action.type === CATEGORY_FILTER) {
    return state.map((item) => ({
      ...item,
      show: action.payload === "all" ? true : item.category === action.payload,
    }));
  }

  return state;
};
