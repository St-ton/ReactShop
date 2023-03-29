import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { basketAddAction } from "../../store/reducer/basketReducer";
import s from "./ProductItem.module.css";

// export default function ProductItem({ image, title }) {
export default function ProductItem({ id, thumbnail, title, price }) {
  const dispatch = useDispatch();
  const link = `/product/${id}`;

  return (
    <div className={s.product_item}>
      <Link to={link}>
        {/* <img src={image} alt={title} /> */}
        <img src={thumbnail} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
      </Link>
      <button
        onClick={() => {
          dispatch(basketAddAction(id));
          toast.success(" Product Added to Basket 👍");
        }}
      >
        Add to Basket
      </button>
    </div>
  );
}
