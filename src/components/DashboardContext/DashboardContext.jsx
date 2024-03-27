import React from "react";
import "./Dashboard.css";
import { MdOutlineWavingHand } from "react-icons/md";
import Card from "../Cards/Cards";
import Graph from "../Graph/Graph";

const DashboardContext = () => {
  return (
    <div>
      <div className="header">
        <div>
          <div className="text-content">
          <h4>Hello,</h4>
          <h4 className="highlated-text">Brooklyn Simmons </h4>
         <div className="icon">
         <MdOutlineWavingHand />
         </div>
         </div>
         <div className="text-content">
         
          <p>Welocome to </p>
          <p className="highlated-text"> Spot trading!</p>
          </div>
        </div>
        <div>
          <button type="button"  className="header-button">Start Trading</button>
        </div>
      </div>
      <div className="component">
      <Graph />
      <Card /> 
        </div>
    
     
    </div>
  );
};

export default DashboardContext;
