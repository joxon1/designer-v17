import React from 'react';
import classess from "./myButtons.module.css"

const MyButton = (props) => {
  return (
    <button className={classess.myButtons} {...props}></button>      
  );
};

export default MyButton;