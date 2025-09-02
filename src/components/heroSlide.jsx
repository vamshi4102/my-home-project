import React from "react";
import slideImage from "../../src/assets/images/slide-1.png";
import "./styles/slide-style.scss";
function HeroSlide({ slide }) {
  return (
    <div class="container d-flex my-4 rounded-3">
      <div class="container">
        <div className="row  slide-container">
          <div className="col-md-6 body">
            <h1 class="display-5">{slide.title}</h1>
            <p class="col-md-8">{slide.body}</p>
            <button class="btn-primary" type="button">
              {slide.callToAction}
            </button>
          </div>
          <div className="col-md-6">
          <img src={slideImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
