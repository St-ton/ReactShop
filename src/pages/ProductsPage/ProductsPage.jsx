import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProductItem from "../../components/ProductItem/ProductItem";
import s from "./ProductsPage.module.css";
import ProductsFilterBar from "../../components/ProductsFilterBar/ProductsFilterBar";
import { productsResetFilter } from "../../store/reducer/productsReducer";

export default function ProductsPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsResetFilter());
  }, []);

  const products = useSelector(({ products }) => {
    if (category === undefined) {
      return products;
    }
    // return products.filter((item) => item.category === category);
    const categoryProducts = products.filter(
      (item) => item.category === category
    );
    return categoryProducts.lenght === 0 ? categoryProducts : "... is empty";
  });
  // console.log(products);
  return (
    <>
      <ProductsFilterBar />
      {/* <h4>{category ? category : "All Products"}</h4> */}
      <div className={s.product_container}>
        {products
          .filter((item) => item.show)
          .map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
      </div>
    </>
  );
}
