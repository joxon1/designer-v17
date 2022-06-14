import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import "../styles/Dropdown.css";
import MyButton from "./UI/MyButton";
const Dropdown = ({ show, toggle }) => {
  return (
    <div
      className="dropdown_container"
      show={show}
      onClick={toggle}
      style={{ opacity: show ? "1" : "0",
      top:show  ? "0" : "-100%"
    }}
    >
      <div className="icons">
        <FaTimes onClick={toggle} />
      </div>
      <div className="dropdown_wrapper">
        <div className="dropdown_menu">
          {menuData.map((item, index) => (
            <Link className="dropdown_link" to={item.link} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="dropdown_btn">
          <MyButton>Contact us</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
