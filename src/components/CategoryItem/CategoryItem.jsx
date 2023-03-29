import React from "react";
import { Link } from "react-router-dom";
import s from "./CategoryItem.module.css";

export const CategoryItem = ({ item }) => {
  const link = `category/${item}`;
  return (
    <div className={s.category_item}>
      <Link to={link}>{item}</Link>
    </div>
  );
};

// todo доработать CategoryItem и обернуть его в Link при нажатии на Link должен быть переход на страницу с продуктами соответствующей категории
