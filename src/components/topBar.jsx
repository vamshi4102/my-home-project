import React from "react";
import Logo from "../../src/assets/images/logo.png"
import "./styles/top-bar.scss"
function TopBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
      <div class="container">
        <a class="navbar-brand" href="#">
         <img src={Logo} className="logo" alt="" />
        </a>
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#">
                  Workers
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="#">
                  Builders
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button className="top-button">Login</button>
      </div>
    </nav>
  );
}

export default TopBar;
