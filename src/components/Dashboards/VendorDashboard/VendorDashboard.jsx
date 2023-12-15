import React from "react";
import "./VendorDashboard.css";
import Cards from "../../Cards/Cards";
import Table from "../../Table/Table";

const VendorDashboard = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default VendorDashboard;
