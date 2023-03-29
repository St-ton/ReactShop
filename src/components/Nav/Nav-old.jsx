import React from "react";
import { useSelector } from "react-redux";
import CustNavLink from "../CustNavLink/CustNavLink";
import s from "./Nav.module.css";

// export default function Nav() {
export const Nav = () => {
  const { basket, products } = useSelector((state) => state);

  const data = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const totalCount = data.reduce((a, { count }) => a + count, 0);

  const links = [
    { id: 1, label: "Categories", to: "/" },
    { id: 2, label: "All Products", to: "/products/all" },
    { id: 3, label: "Basket", to: "/basket", count: totalCount },
  ];

  return (
    <nav className={s.nav}>
      {links.map(({ id, ...item }) => (
        <CustNavLink key={id} {...item} />
      ))}
    </nav>
  );
};

//  <NavLink className={isActive} to="/">
//         Категории
//       </NavLink>
//       <NavLink className={isActive} to="/products/all">
//         Все товары
//       </NavLink>
//       <NavLink className={isActive} to="/basket" count>
//         Корзина
//       </NavLink>
