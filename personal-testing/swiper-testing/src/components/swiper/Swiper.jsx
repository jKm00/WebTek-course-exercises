import React from "react";

import "./swiper.css";

export default function Swiper() {
  return (
    <div className="swiper">
      <button className="swiper__nav-btn swiper__nav-btn--right">&#x3c;</button>
      <button className="swiper__nav-btn swiper__nav-btn--left">&#x3e;</button>
      <div className="swiper__item">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="swiper__item">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="swiper__item">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
    </div>
  );
}
