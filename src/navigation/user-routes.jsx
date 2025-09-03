import React from "react";
import TopBar from "../components/topBar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
