import React from "react";
import MyButton from "./UI/MyButton";
import "../styles/InfoSection.css";
const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
  reverse,
  delay,
}) => {
  return (
    <div className="info_section">
      <div className="info_container">
        <div
          className="info_column_left"
          style={{ order: reverse ? "2" : "1" }}
        >
          <h1 className="left_title">{heading}</h1>
          <p className="left_text">{paragraphOne}</p>
          <p className="left_text">{paragraphTwo}</p>
          <MyButton to="/homes">{buttonLabel}</MyButton>
        </div>
        <div
          className="info_column_right"
          reverse={reverse}
          style={{ order: reverse ? "1" : "2" }}
        >
          <img className="right_img" src={image} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
