import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown show={show} toggle={toggle} />
      <Hero />
    </>
  );
};

export default App;
