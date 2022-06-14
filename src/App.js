import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData } from "./data/InfoData";

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
      <InfoSection {...InfoData} />
    </>
  );
};

export default App;
