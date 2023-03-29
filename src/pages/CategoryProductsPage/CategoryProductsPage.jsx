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
      <div>Категория:{category}</div>
      {products.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </>
  );
}

//todo 1) считать все продукты и оставить только те, у которых категория соответствует указанной в URL
//todo 2) пройтись мапом по получившемуся массиву и вывести карточки продуктов
//todo НЕ ДЕЛАЕМ ДОПОЛНИТЕЛЬНЫХ СЕТЕВЫХ ЗАПРОСОВ
