import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { VendorSidebarData } from "./Data";
// import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  useEffect(() => {

  }, [selected]);

  const handleClick = (index) => {
    setSelected(index);
    // any other logic needed on click
  };

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);

  // const navigate = useNavigate();

  // const handleSignOut = () => {

  //   navigate('/login');
  // };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
    

        {/* menu */}
        <div className="menu">
          {VendorSidebarData.map((item, index) => (
            <Link
              to={item.link}
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              // onClick={() => setSelected(index)}
              onClick={() => handleClick(index)}
            >
              <FontAwesomeIcon icon={item.icon} />
              {item.title}
            </Link>
          ))}
          <Link to="/register" className="menuItem">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sign Out
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
