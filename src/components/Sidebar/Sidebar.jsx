import React, { useState } from "react";
import Logo from "../../images/logo2.png";
import { NavList } from "../../data/data";
import { FaBars } from "react-icons/fa";

import "./Sidebar.css";
const Sidebar = () => {
  const [selectedOption,updatedOption]=useState(0)
  const [expanded,toggleState]=useState(true)
  return (
    <div className="Sidebar" style={expanded?{width:"100%"}:{width:"30%"}}>
      <div className="logo">
        <img src={Logo} alt="logo" className={expanded?"dispaly":"close"}/>
        <button onClick={()=>toggleState(!expanded)}>
        <FaBars />
        </button>
        
      </div>
      <div className="nav">
      {NavList.map((eachItem,index)=>{
        return(
<div className={selectedOption===index?"nav-items active":"nav-items"} key={index} onClick={()=>{updatedOption(index)}}>
  <eachItem.icon/>
  <span className={expanded?"dispaly":"close"}>
    {eachItem.heading}
  </span>
        </div>
        )
      })}
        
      </div>
     
    </div>
    
  );
};
export default Sidebar;
