import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { AllProductsPage } from "../../pages/AllProductsPage/AllProductsPage";
// import CategoryProductsPage from "../../pages/CategoryProductsPage/CategoryProductsPage";
import { BasketPage } from "../../pages/BasketPage/BasketPage";
import { CategoriesPage } from "../../pages/CategoriesPage/CategoriesPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { Nav } from "../Nav/Nav-old";
import { Footer } from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { asyncLoadCategoriesAction } from "../../store/asyncAction/categories";
import { asyncLoadProductsAction } from "../../store/asyncAction/products";

import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ProductDescriptionPage from "../../pages/ProductDescriptionPage/ProductDescriptionPage";

import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  // const [selectedCategory, setSelectedCategory] = useState("all products");

  useEffect(() => {
    dispatch(asyncLoadCategoriesAction);
    dispatch(asyncLoadProductsAction);
  }, []);

  return (
    <div className="app">
      <div className="header">
        <Nav />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          {/* <Route path="/products/all" element={<AllProductsPage />} /> */}
          {/* <Route path="/category/:category" element={<CategoryProductsPage />}/> */}
          <Route path="/products/all" element={<ProductsPage />} />
          <Route path="/category/:category" element={<ProductsPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/product/:id" element={<ProductDescriptionPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <ToastContainer autoClose={500} theme="light" hideProgressBar={true} />
    </div>
  );
}
