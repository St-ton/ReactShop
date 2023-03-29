import React from "react";
import { useSelector } from "react-redux";
import { basketClearAction } from "../../store/reducer/basketReducer";
import { useDispatch } from "react-redux";
import s from "./BasketCalculation.module.css";

export default function BasketCalculation() {
  const dispatch = useDispatch();

  const { basket, products } = useSelector((state) => state);

  const totalSumm = basket.reduce((acc, item) => {
    const product = products.find(({ id }) => id === item.id);
    return acc + item.count * product.price;
  }, 0);

  const totalCount = basket.reduce((acc, { count }) => acc + count, 0);
  // console.log(basket.length);
  // console.log(basket);

  const basketRender = () => {
    if (basket.length !== 0) {
      return (
        <div className={s.container}>
          <span>Total Count:</span>
          <p>{totalCount}</p>
          <span>Total Summa:</span>
          <p> {totalSumm}</p>
          <button onClick={() => dispatch(basketClearAction())}>Clear</button>
        </div>
      );
    } else {
      return (
        <div className={s.container_leer}>
          <p>Basket leer...</p>
        </div>
      );
    }
  };

  return basketRender();

  // <div className={s.container}>
  //   <span>Total Count:</span>
  //   <p>{totalCount}</p>
  //   <span>Total Summa:</span>
  //   <p> {totalSumm}</p>
  //   <button onClick={() => dispatch(basketClearAction())}>Clear</button>
  // </div>
}
