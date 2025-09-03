import React, { useState } from "react";
import Logo from "../../../src/assets/images/logo.png";
import "../styles/top-bar.scss";
import LoginModal from "../loginModal";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/context/AuthContext";
import { Button, Popover } from "antd";
const AdminTopBar = () => {
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

export default AdminTopBar;
