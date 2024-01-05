import React from 'react';
import './Vendor.css';
import Sidebar from '../../components/Sidebar/VendorSidebar';

const VendorDashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className='dashboard-content'>
                <h1>Dashboard</h1>
                {/* Your dashboard content */}
            </div>
        </div>
    );
};

export default VendorDashboard;
