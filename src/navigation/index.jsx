import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "../components/topBar";
import HomePage from "../pages/home";
import Products from "../pages/products";
import Builders from "../pages/builders";
import Workers from "../pages/workers";
import Footer from "../components/footer";
import UserLayout from "./user-routes";
import AdminLayout from "./admin-routes";
import AdminLogin from "../pages/admin";
import Dashboard from "../pages/admin/dashboard";
import AddProduct from "../pages/admin/add-product";
import ProtectedAdmin from "./protect-admin";

function WebsiteStartPoint() {
  return (
    <>
      <Router>
        <Routes>
          {/* user routes here */}
          <Route element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/builders" element={<Builders />} />
            <Route path="/workers" element={<Workers />} />
          </Route>
          {/* admin routes here */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedAdmin>
                  <Dashboard />
                </ProtectedAdmin>
              }
            />
            <Route
              path="/admin/add-product"
              element={
                <ProtectedAdmin>
                  <AddProduct />
                </ProtectedAdmin>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default WebsiteStartPoint;
