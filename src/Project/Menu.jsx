import React from 'react';
import { IoIosMailOpen } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <div className="navbar-container">
        <ul className="navbar">
          <li className="nav-item">
            {/* <Link to="/"> */}
              <FaHome className="fas" />
              <span className="nav-label">Home</span>
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/about"> */}
              <MdPeopleAlt className="fas" />
              <span className="nav-label">About</span>
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/portfolio"> */}
              <FaMessage className="fas" />
              <span className="nav-label">Portfolio</span>
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/contact"> */}
              <IoIosMailOpen className="fas" />
              <span className="nav-label">Contact</span>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
