import React from "react";
import {
  basketIncrementAction,
  basketDecrementAction,
  basketDelAction,
} from "../../store/reducer/basketReducer";
import { useDispatch } from "react-redux";

import s from "./BasketItem.module.css";

export default function BasketItem({ id, thumbnail, title, price, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.basket_item}>
      <img src={thumbnail} alt={title} />
      <p className={s.title}>{title}</p>
      <p>
        {price} x {count} = <span className={s.summ}>{price * count}</span>
      </p>

      <div className={s.btns}>
        <button onClick={() => dispatch(basketDecrementAction(id))}>-</button>
        <button onClick={() => dispatch(basketIncrementAction(id))}>+</button>
        <button className={s.red} onClick={() => dispatch(basketDelAction(id))}>
          x
        </button>
      </div>
    </div>
  );
}
