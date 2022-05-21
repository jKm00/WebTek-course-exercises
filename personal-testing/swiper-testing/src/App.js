import React from "react";

import Swiper from "./components/swiper/Swiper";

import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Swiper
        images={[
          "https://picsum.photos/500/500?random=1",
          "https://picsum.photos/500/500?random=2",
          "https://picsum.photos/500/500?random=3",
        ]}
      />
    </div>
  );
}
