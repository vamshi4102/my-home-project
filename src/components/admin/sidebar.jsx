import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <ul class="list-group">
        <li class="list-group-item">
          <Link to={"/admin/dashboard"} style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </li>
        <li class="list-group-item">
          <Link to={"/admin/add-product"} style={{ textDecoration: "none" }}>
            Add product
          </Link>
        </li>
        <li class="list-group-item">
          <Link to={"/admin/add-worker"} style={{ textDecoration: "none" }}>
            Add Worker
          </Link>
        </li>
        <li class="list-group-item">
          <Link to={"/admin/add-builder"} style={{ textDecoration: "none" }}>
            Add Builders
          </Link>
        </li>
        <li class="list-group-item">
          <Link to={"/admin/add-admin"} style={{ textDecoration: "none" }}>
            Add Admin
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
