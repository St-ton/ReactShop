import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function CategoryProductsPage() {
  const { category } = useParams();

  const products = useSelector(({ products }) =>
    products.filter((item) => item.category === category)
  );

  return (
    <>
      <div>Category:{category}</div>
      {products.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </>
  );
}
