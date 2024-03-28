import React, { useState } from "react";
import Logo from "../../images/logo2.png";
import { NavList } from "../../data/data";

import "./Sidebar.css";
const Sidebar = (props) => {
  const [selectedOption, updatedOption] = useState(0);
  const {content}=props
  
  return (
    <>
     
      
      <div
        className="Sidebar"
        
      >
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
         
          />
        </div>
        <div className="nav">
          {NavList.map((eachItem, index) => {
            return (
              <div
                className={
                  selectedOption === index ? "nav-items active" : "nav-items"
                }
                key={index}
                onClick={() => {
                  updatedOption(index);
                }}
              >
               <div className="nav-icons">
               <eachItem.icon />
               </div>
               
                <span>
                  {eachItem.heading}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Sidebar;
