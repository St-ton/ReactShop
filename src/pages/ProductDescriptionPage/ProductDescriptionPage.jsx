import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { basketAddAction } from "../../store/reducer/basketReducer";

import s from "./ProductDescriptionPage.module.css";

export default function ProductDescriptionPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(({ products }) =>
    products.find((item) => item.id === +id)
  );

  const render = () => {
    if (product === undefined) {
      return <p>Page Loading</p>;
    } else {
      const { id, title, description, thumbnail, price } = product;

      return (
        <div className={s.container}>
          <img src={thumbnail} alt={title} />
          <div className={s.info}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className={s.price}>
              <p>Price: {price}</p>
              <button
                onClick={() => {
                  dispatch(basketAddAction(id));
                  toast.success(" Product Added to Basket 👍");
                }}
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
}
