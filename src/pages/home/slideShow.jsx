import React from "react";
import { Carousel } from "antd";
import HeroSlide from "../../components/heroSlide";
import { slidesContent } from "../../assets/brand";
function SlideShow() {
  return (
    <Carousel autoplay autoplaySpeed={2000} dotPosition="bottom">
      {slidesContent.map((slide, index) => (
        <div>
          <HeroSlide slide={slide}/>
        </div>
      ))}
    </Carousel>
  );
}
export default SlideShow;
