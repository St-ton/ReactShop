import React from "react";
import { Link } from "react-router-dom";
import s from "./CategoryItem.module.css";

export const CategoryItem = ({ item }) => {
  const link = `category/${item}`;
  // const newItem = item.charAt(0).toUpperCase() + item.slice(1);
  return (
    <div className={s.category_item}>
      {/* <Link to={link}>{newItem}</Link> */}
      <Link to={link}>{item}</Link>
    </div>
  );
};
