import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorSidebar from './components/Sidebar/VendorSidebar.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import VendorDashboard from './pages/vendor/VendorDashboard.jsx';
import Orders from './pages/vendor/Orders.jsx';
import './App.css'


const App = () => {
    // Determine the role of the user (this should come from authentication)
    const userRole = 'vendor'; 

    return (
        <Router>
            <Navbar />
            {userRole === 'vendor' && <VendorSidebar />}
            {/* Similarly for admin and super admin */}

            <Routes>
                <Route path="/" element={<VendorDashboard />} />
                <Route path="/orders" element={<Orders />} />
                {/* Define other routes based on roles */}
            </Routes>
        </Router>
    );
};

export default App;
