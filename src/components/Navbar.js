import React from "react";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import "../styles/Navbar.css";
import MyButton from "./UI/MyButton";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar_header">
      <div className="navbar_logo">
        <Link to="/" className="navbar_link">
          <b>ALMAZ</b>
        </Link>
      </div>
        <FaBars className="menu_bars"  />
      <div className="navbar_menu">
        {menuData.map((item, index) => (
          <Link className="navbar_link" to={item.link} key={index}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="navbar_btn">
        <MyButton>Contact Us</MyButton>
      </div>
    </div>
  );
};

export default Navbar;
