import React, { useState } from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ShopingKart-react/products" element={<Products />} />
        <Route
          path="/productDetails/:id"
          element={<ProductDetails  />}
        />

        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
