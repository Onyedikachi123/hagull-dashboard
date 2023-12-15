import './App.css'
import VendorDashboard from './components/Dashboards/VendorDashboard/VendorDashboard';
import Sidebar from './components/Sidebar/Sidebar';
import RightSide from './components/RightSide/RightSide'

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar />
          <VendorDashboard />
          <RightSide />
        </div>
    </div>
  );
}

export default App;
