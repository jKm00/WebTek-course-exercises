import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./component/Nav";
import Home from "./component/Home";
import About from "./component/About.jsx";
import Button from "./component/Button";

export default function App() {
  return (
    <>
      <Nav />
      <Button counter={1} />
      <Button counter={2} />
      <Button counter={3} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
