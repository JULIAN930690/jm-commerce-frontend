import React from "react";
import { Routes, Route } from "react-router-dom";

// Página de inicio actualizada (con secciones estilo Mercado Libre)
import HomePage from "../pages/HomePage";

// Páginas generales
import Tienda from "../pages/Tienda";
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

// ✅ Agregado: vista de productos por categoría
import CategoryList from "../pages/CategoryList";
import CategoryDetail from "../pages/CategoryDetail"; // ✅ Esta línea es nueva

// Componentes funcionales
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Chat from "../pages/Chat";
import StorePage from "../pages/StorePage";
import StatisticsPage from "../pages/StatisticsPage";
import CouponForm from "../components/CouponForm";
import TrackingStatus from "../components/TrackingStatus";

export default function AppRoutes() {
  return (
    <Routes>
      {/* 🔹 Página principal */}
      <Route path="/" element={<HomePage />} />
      <Route path="/inicio" element={<HomePage />} />

      {/* 🔹 Rutas públicas */}
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
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
      <Route path="/categories/:id" element={<CategoryDetail />} /> {/* ✅ Esta es la correcta */}
      <Route path="/user/:id" element={<UserProfile />} />

      {/* 🔹 Nuevas funcionalidades */}
      <Route path="/chat" element={<Chat />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/coupon" element={<CouponForm />} />
      <Route path="/tracking" element={<TrackingStatus />} />

      {/* 🔐 Rutas protegidas */}
      <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
      <Route path="/admin" element={<PrivateRoute element={<AdminPage />} />} />
      <Route path="/history" element={<PrivateRoute element={<PurchaseHistoryPage />} />} />
      <Route path="/my-sales" element={<PrivateRoute element={<MySalesPage />} />} />
      <Route path="/orders-history" element={<PrivateRoute element={<OrderHistory />} />} />
      <Route path="/product-form" element={<PrivateRoute element={<ProductForm />} />} />
      <Route path="/orders" element={<PrivateRoute element={<Orders />} />} />

      {/* ❌ Página no encontrada */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
