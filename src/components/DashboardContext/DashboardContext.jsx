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
          <h4>Hello, <span className="highlated-text"> Brooklyn Simmons </span> <span className="icon">
         <MdOutlineWavingHand />
         </span></h4>
          <p>Welocome to <span className="highlated-text"> Spot trading!</span>
         </p>
          
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
