import React from "react";
import { NavLink } from "react-router-dom";
import s from "./CustNavLink.module.css";

export default function CustNavLink({ label, count, ...item }) {
  const isActive = ({ isActive }) =>
    // [isActive ? s.active : "", s.link].join(" ");
    isActive ? `${s.link} ${s.active}` : s.link;
  return (
    <>
      <NavLink data-count={count || undefined} className={isActive} {...item}>
        {label}
      </NavLink>
    </>
  );
}
