import React from "react";
import { useSelector } from "react-redux";

// import { ProductItem } from "../../components/ProductItem/ProductItem";
import ProductItem from "../../components/ProductItem/ProductItem";

import "./AllProductsPage.css";
export const AllProductsPage = () => {
  const state = useSelector(({ products }) => products);

  return (
    <div className="product_container">
      {state.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
};
