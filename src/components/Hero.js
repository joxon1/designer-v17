import React, { useState, useRef, useEffect } from "react";
import "../styles/Hero.css";
import { SliderData } from "../data/SliderData";
import MyButton from "../components/UI/MyButton";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { ImPrevious, ImNext } from "react-icons/im";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearInterval(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearInterval(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearInterval(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
    <div className="hero_container">
      <div className="hero_wrapper">
        {SliderData.map((slide, index) => (
          <div className="hero_slide" key={index}>
            {index === current && (
              <div className="hero_slider">
                <div className="hero_img_container">
                  <img className="hero_img" src={slide.image} alt={slide.alt} />
                </div>
                <div className="hero_content">
                  <h1 className="hero_content_title">{slide.title}</h1>
                  <p className="hero_content_text">{slide.price}</p>
                  <MyButton to={slide.path} style={{ maxWidth: "160px" }}>
                    {slide.label}
                    <AiOutlineArrowsAlt />
                  </MyButton>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="slider_buttons">
          <ImPrevious className="arrow_buttons" onClick={prevSlide} />
          <ImNext className="arrow_buttons" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
