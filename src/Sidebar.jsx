
import React from "react";
import { FaList, FaUserMd, FaTrello, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="public/logoCesar.png" alt="Logo" className="logo" />
      </div>

      <nav className="nav-menu">
        <a href="#" className="nav-link"><FaList className="icon" /> Lista</a>
        <a href="#" className="nav-link"><FaUserMd className="icon" /> Atendimentos</a>
        <a href="#" className="nav-link"><FaTrello className="icon" /> Board Time</a>
        <a href="#" className="nav-link"><FaCalendarAlt className="icon" /> Calendário</a>
      </nav>

      <div className="logout">
        <a href="#" className="nav-link logout-link"><FaSignOutAlt className="icon" /> Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;
