import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoriesReducer } from "./reducer/categoriesReducer";
import { productsReducer } from "./reducer/productsReducer";
import { basketReducer } from "./reducer/basketReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  basket: basketReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
