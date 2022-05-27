import React, { useState, useEffect } from "react";

import "./swiper.css";

const SWIPER = document.querySelector("[data-swiper]");

export default function Swiper({ images }) {
  const [swiperHeight, setSwiperHeight] = useState(NaN);
  const [swiperWidth, setSwiperWidth] = useState(NaN);
  const [current, setCurrent] = useState(0);
  const [items, setItems] = useState(
    document.querySelectorAll("[data-swiper-item]")
  );

  useEffect(() => {
    setSwiperHeight(document.querySelector("[data-swiper]").clientHeight);
    setSwiperWidth(document.querySelector("[data-swiper]").clientWidth);
  }, []);

  function goPrevious() {}

  function goNext() {
    setCurrent(current + 1);
    const translation = -swiperWidth * current;
    items.forEach((item) => {
      item.style.transform = "translate(" + translation + "px, 0)";
    });
  }

  return (
    <div className="swiper" data-swiper>
      <button
        onClick={goPrevious}
        className="swiper__nav-btn swiper__nav-btn--left"
      >
        &#x3c;
      </button>
      <button
        onClick={goNext}
        className="swiper__nav-btn swiper__nav-btn--right"
      >
        &#x3e;
      </button>
      {images.map((img, index) => (
        <div key={index} className="swiper__item" data-swiper-item>
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
}
