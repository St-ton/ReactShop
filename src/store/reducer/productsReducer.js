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
  switch (action.type) {
    case PRODUCTS_LOAD:
      return action.payload.map((item) => ({ ...item, show: true }));

    case PRODUCTS_SEARCH_FILTER:
      return state.map((item) => ({
        ...item,
        show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()),
      }));

    case PRODUCTS_RESET_FILTER:
      return state.map((item) => ({ ...item, show: true }));

    case PRODUCTS_SORT_PRICE_FILTER:
      switch (action.payload) {
        case "priceup":
          return [...state].sort((a, b) => a.price - b.price);

        case "pricedown":
          return [...state].sort((a, b) => b.price - a.price);

        default:
          return state;
      }

    case PRODUCTS_SORT_NAME_FILTER:
      switch (action.payload) {
        case "name-az":
          return [...state].sort((a, b) => a.title.localeCompare(b.title));

        case "name-za":
          return [...state].sort((a, b) => b.title.localeCompare(a.title));

        default:
          return state;
      }

    case CATEGORY_FILTER:
      return state.map((item) => ({
        ...item,
        show:
          action.payload === "all" ? true : item.category === action.payload,
      }));

    default:
      return state;
  }
};
