import React from "react";
import { Outlet } from "react-router-dom";
import AdminTopBar from "../components/admin/topBar";
import SideBar from "../components/admin/sidebar";

function AdminLayout() {
  return (
    <div className="bg-light">
      <AdminTopBar />
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-auto bg-light ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
