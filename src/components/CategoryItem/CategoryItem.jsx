import React from "react";
import { Link } from "react-router-dom";
import s from "./CategoryItem.module.css";

export const CategoryItem = ({ item }) => {
  const link = `category/${item}`;
  return (
    <div className={s.category_item}>
      <Link to={link}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
    </div>
  );
};
