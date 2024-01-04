import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../imgs/logo.png";
import { motion } from 'framer-motion';

import {
  faInbox,
  faBars,
  faComments,
  faFileAlt,
  faStar,
  faTicketAlt,
  faBell,
  faQuestionCircle,
  faChartBar,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  // const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
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
        style={{width: '265px'}}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              <FontAwesomeIcon icon={faHome} /> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/payment-and-invoicing"
              className="nav-link"
              aria-current="page"
            >
              <FontAwesomeIcon icon={faInbox} /> Payment and Invoicing
            </Link>
          </li>
          
        </ul>
      </motion.div>
    </>
  );
};

export default Sidebar;
