import React from "react";
import { RightOutlined } from "@ant-design/icons";
import "./Header.css";

const Header = ({ isSidebarOpen, isTransactionOpen, setIsTransactionOpen }) => {
  return (
    <div className={`header-container ${isSidebarOpen ? "expanded" : "collapsed"}`}>
      {!isTransactionOpen && (
        <RightOutlined className="toggle-icon" onClick={() => setIsTransactionOpen(true)} />
      )}
      <img src="/Icons/house-solid.svg" alt="homeicon" className="home-icon" />
      <span className="breadcrumb">CLIENT</span>
      <RightOutlined className="breadcrumb-arrow" />
      <span className="breadcrumb">MATTER</span>
      <RightOutlined className="breadcrumb-arrow" />
      <span className="breadcrumb">TRANSACTION DETAIL PAGE</span>
      <RightOutlined className="breadcrumb-arrow" />
      <span className="breadcrumb active">TRANSACTION CONTENTS</span>
    </div>
  );
};

export default Header;
