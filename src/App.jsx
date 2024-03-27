import './App.css'
import DashboardContext from './components/DashboardContext/DashboardContext';
import Sidebar from './components/Sidebar/Sidebar';

const App=()=>  (
    <div className="main-container">
      <div className="content">
       <Sidebar/>
       <DashboardContext/>
      </div>
    
    </div>
  );


export default App;
