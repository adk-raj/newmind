import React from "react";
import "./RightMenu.css";

const menuItems = [
  { icon: "/Icons/house.svg", label: "Transaction" },
  { icon: "/Icons/align-right.svg", label: "Contents" },
  { icon: "/Icons/clipboard-check-list.svg", label: "Tasks" },
  { icon: "/Icons/clock-circle.svg", label: "Phases" },
  { icon: "/Icons/clipboard-pen.svg", label: "Sign Tracking" },
  { icon: "/Icons/bookmark.svg", label: "Critical Info" },
  { icon: "/Icons/analysis.svg", label: "Analysis Phases" },
  { icon: "/Icons/calender-days-2.svg", label: "Calendar" },
  { icon: "/Icons/reports.svg", label: "Activity Log" },
];

const RightMenu = () => {
  return (
    <div className="right-menu">
      {menuItems.map(({ icon, label }) => (
        <div key={label} className="menu-item">
          <img src={icon} alt={label} className="menuicons" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default RightMenu;
