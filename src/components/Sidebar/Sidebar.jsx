import React, { useState } from "react";
import Logo from "../../images/logo2.png";
import { NavList } from "../../data/data";
import { AiOutlineLogout } from "react-icons/ai";

import "./Sidebar.css";
const Sidebar = () => {
  const [selectedOption,updatedOption]=useState(0)
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav">
      {NavList.map((eachItem,index)=>{
        return(
<div className={selectedOption===index?"nav-items active":"nav-items"} key={index} onClick={()=>{updatedOption(index)}}>
  <eachItem.icon/>
  <span>
    {eachItem.heading}
  </span>
        </div>
        )
      })}
         <div className="nav-items">
         <AiOutlineLogout />
      </div>
        
      </div>
     
    </div>
  );
};
export default Sidebar;
