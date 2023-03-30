import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsSearchFilterAction,
  productsSortPriceFilterAction,
  productsSortNameFilterAction,
  categoryFilterAction,
} from "../../store/reducer/productsReducer";
import s from "./ProductsFilterBar.module.css";

export default function ProductsFilterBar() {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const searchOnChange = (event) => {
    dispatch(productsSearchFilterAction(event.target.value));
  };

  const sortPriceOnChange = (event) => {
    dispatch(productsSortPriceFilterAction(event.target.value));
  };

  const sortNameOnChange = (event) => {
    dispatch(productsSortNameFilterAction(event.target.value));
  };

  const categoryOnChange = (event) => {
    setSelectedCategory(
      event.target.value
        ? event.target.value.charAt(0).toUpperCase() +
            event.target.value.slice(1)
        : "All Products"
    );
    dispatch(categoryFilterAction(event.target.value));
  };

  // const categoryOnChange = (event) => {
  //   dispatch(categoryFilterAction(event.target.value));
  // };

  // const category = categoryOnChange;
  // const selectedCategory = () => {
  //   return category !== "" ? category : "All Products";
  // };

  return (
    <>
      <div className={s.container}>
        <select
          onChange={(event) => {
            categoryOnChange(event);
          }}
        >
          <option selected disabled value="">
            Category
          </option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Search" onChange={searchOnChange} />
        <select onChange={sortPriceOnChange}>
          <option selected disabled value="">
            Sort Price
          </option>
          <option value="priceup">Price Up</option>
          <option value="pricedown">Price Down</option>
        </select>
        <select onChange={sortNameOnChange}>
          <option selected disabled value="">
            Sort Name
          </option>
          <option value="name-az">Sort A-Z</option>
          <option value="name-za">Sort Z-A</option>
        </select>
      </div>
      <h4>Category: {selectedCategory}</h4>
    </>
  );
}
