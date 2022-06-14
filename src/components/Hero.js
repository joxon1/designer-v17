import React from "react";
import "../styles/Hero.css";
import { SliderData } from "../data/SliderData";
import MyButton from "../components/UI/MyButton";
import { AiOutlineArrowsAlt } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_wrapper">
        {SliderData.map((slide, index) => (
          <div className="hero_slide" key={index}>
            <div className="hero_slider">
              <div className="hero_img" />
              <div className="hero_content">
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>
                <MyButton to={slide.path} style={{ maxWidth: "160px" }}>
                  {slide.label}
                  <AiOutlineArrowsAlt />
                </MyButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
