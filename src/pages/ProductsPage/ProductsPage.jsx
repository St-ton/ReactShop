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
    return products.filter((item) => item.category === category);
  });

  // const products = useSelector(({ products }) => {
  //   if (category === undefined) {
  //     return products;
  //   }
  //   const categoryProducts = products.filter(
  //     (item) => item.category === category
  //   );
  //   return categoryProducts.length === 0 ? "... is empty" : categoryProducts;
  // });

  return (
    <>
      <ProductsFilterBar />
      <h4>{category ? `Category: ${category}` : `Category: all products`}</h4>
      {/* <h4>
        {category
          ? `Category: ${setSelectedCategory}`
          : `Category: all products`}
      </h4> */}
      <div className={s.product_container}>
        {/* {products.length === 0 ? ( */}
        {products.length === 0 || products.every((item) => !item.show) ? (
          <p className={s.empty}>... no products in this category 😔 ...</p>
        ) : (
          products
            .filter((item) => item.show)
            .map((item) => <ProductItem key={item.id} {...item} />)
        )}
      </div>
    </>
  );
}
