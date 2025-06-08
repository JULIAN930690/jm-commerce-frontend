import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import ApiDocs from "../pages/ApiDocs";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";
import PurchaseHistoryPage from "../pages/PurchaseHistoryPage";
import MySalesPage from "../pages/MySalesPage";
import HelpPage from "../pages/HelpPage";
import NotFoundPage from "../pages/NotFoundPage";
import AllProducts from "../pages/AllProducts";
import OrderHistory from "../pages/OrderHistory";
import ProductForm from "../pages/ProductForm";
import PromotionsPage from "../pages/PromotionsPage";
import ReviewsPage from "../pages/ReviewsPage";
import CategoriesPage from "../pages/CategoriesPage";
import UserProfile from "../pages/UserProfile";
import Orders from "../pages/Orders";
import PrivateRoute from "../components/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/api-docs" element={<ApiDocs />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-success" element={<OrderSuccessPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/promotions" element={<PromotionsPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/user/:id" element={<UserProfile />} />

      {/* Rutas protegidas */}
      <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
      <Route path="/admin" element={<PrivateRoute element={<AdminPage />} />} />
      <Route path="/history" element={<PrivateRoute element={<PurchaseHistoryPage />} />} />
      <Route path="/my-sales" element={<PrivateRoute element={<MySalesPage />} />} />
      <Route path="/orders-history" element={<PrivateRoute element={<OrderHistory />} />} />
      <Route path="/product-form" element={<PrivateRoute element={<ProductForm />} />} />
      <Route path="/orders" element={<PrivateRoute element={<Orders />} />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
