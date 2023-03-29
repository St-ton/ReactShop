import React from "react";
import { useSelector } from "react-redux";
import { CategoryItem } from "../../components/CategoryItem/CategoryItem";

import s from "./CategoriesPage.module.css";

export const CategoriesPage = () => {
  const categories = useSelector((store) => store.categories);

  return (
    <div className={s.categories_page}>
      <h1>The best shop for the best things</h1>
      <div className={s.categories_container}>
        {categories.map((item) => (
          <CategoryItem key={item} item={item} />
        ))}
      </div>
    </div>
  );
};
