import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Footer from "./Footer";
import Product from "../pages/Product";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import ProductViewModal from "./ProductViewModal";

function Layout() {
  return (
    <div className="over_flow">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="main">
        <Routes>
          <Route path="/catalog/:slug" element={<Product />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
      <ProductViewModal />
    </div>
  );
}

export default Layout;
