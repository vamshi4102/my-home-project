import React from "react";
import Logo from "../../src/assets/images/logo.png";
import { brandData } from "../assets/brand";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div class="container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div class="col-md-4 mb-3">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img src={Logo} className="logo" alt="" style={{ height: 80 }} />
          </a>
          <p class="text-muted">{brandData.description}</p>
        </div>

        <div class="col mb-3">
          <h5>Pages</h5>
          <ul class="nav flex-column">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Products
                </a>
              </li>
            </Link>
            <Link to="/workers" style={{ textDecoration: "none" }}>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Workers
                </a>
              </li>
            </Link>
            <Link to="/builders" style={{ textDecoration: "none" }}>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Builders
                </a>
              </li>
            </Link>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Legal</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Terms of Use
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Privacy policy
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Refund policy
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Social Media</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Instagram
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Facebook
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Youtube
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Teligram
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Twitter(X)
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="text-center border-top py-3">
        <p>{brandData.copyright}</p>
      </div>
    </div>
  );
}

export default Footer;
