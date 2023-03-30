import React from "react";
import { useSelector } from "react-redux";
import BasketCalculation from "../../components/BasketCalculation/BasketCalculation";

import BasketItem from "../../components/BasketItem/BasketItem";
import s from "./BasketPage.module.css";

export const BasketPage = () => {
  const { basket, products } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  return (
    <div>
      {products.length === 0 ? (
        <p>Basket Loading...</p>
      ) : (
        <>
          <div className={s.basket_container}>
            <h1>Basket</h1>
            {data.map((item) => (
              <BasketItem key={item.id} {...item} />
            ))}
          </div>
          <BasketCalculation />
        </>
      )}
    </div>
  );
};
