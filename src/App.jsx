import { useState } from 'react';
import './App.css'
import DashboardContext from './components/DashboardContext/DashboardContext';
import Sidebar from './components/Sidebar/Sidebar';
import { FaBars } from "react-icons/fa";

const App=()=>{ 
  const [expanded, toggleState] = useState(true);

  return (
    <div className="main-container">
       
      <div  className={expanded?"content expanded":"content contact"}>
      <div className="bars" style={{left:"3%"}}>
        <button onClick={() => toggleState(!expanded)}  className='bars-button'>
          <FaBars />
        </button>
        </div>
        
      {expanded && <Sidebar content={expanded}/>}
     
       <DashboardContext/>
     
       
      </div>
    
    </div>
  );

}
export default App;
