import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
  { path: "/properties", icon: "/Icons/muamelat logo.svg", label: "Muamelat", className: "muamelat-icon" },
  { path: "/properties", icon: "/Icons/chart-simple.svg", label: "Properties" },
  { path: "/documents", icon: "/Icons/file-lines.svg", label: "Transaction" },
  { path: "/documents", icon: "/Icons/folder-3.svg", label: "Documents" },
  { path: "/documents", icon: "/Icons/envelope.svg", label: "Email" },
  { path: "/documents", icon: "/Icons/file.svg", label: "Reports" },
  { path: "/documents", icon: "/Icons/sliders.svg", label: "Management Panel" },
  { path: "/documents", icon: "/Icons/calender-days-2.svg", label: "Transaction Calendar" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        {menuItems.map(({ path, icon, label, className = "sidebar-icon" }) => (
          <li key={label}>
            <Link to={path}>
              <img src={icon} alt={label} className={className} />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
