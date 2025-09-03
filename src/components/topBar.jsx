import React, { useState } from "react";
import Logo from "../../src/assets/images/logo.png";
import "./styles/top-bar.scss";
import LoginModal from "./loginModal";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/context/AuthContext";
import { Button, Popover } from "antd";
const TopBar = () => {
  const { user, logOutAccount } = useAuth();
  const [IsLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
      <div class="container">
        <Link to="/">
          <a class="navbar-brand" href="#">
            <img src={Logo} className="logo" alt="" />
          </a>
        </Link>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Products
                  </a>
                </li>
              </Link>
              <Link to="/workers" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Workers
                  </a>
                </li>
              </Link>
              <Link to="/builders" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Builders
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {user ? (
          <div>
            <Popover
              placement="bottom"
              title={"You are Logged in"}
              content={
              <div>
                <p>{user?.email}</p>
                <hr />
                <button className="top-button" onClick={() => logOutAccount()}>
                  LogOut
                </button>
              </div>
              }
            >
              <Button>{user?.email[0]}</Button>
            </Popover>
          </div>
        ) : (
          <button
            className="top-button"
            onClick={() => setIsLoginOpen(!IsLoginOpen)}
          >
            Login
          </button>
        )}
      </div>
      {/* login modal here */}
      <LoginModal setIsOpen={setIsLoginOpen} IsOpen={IsLoginOpen} />
    </nav>
  );
};

export default TopBar;
