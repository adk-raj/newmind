import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar"

import Header from "../Header/Header";
import RightMenu from "../RightMenu/RightMenu";
import TransactionContent from "../transactioncontent/Transactioncontent";
import TransactionContentStages from "../transactioncontentstages/transactioncontentstages";
import { Routes, Route } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTransactionOpen, setIsTransactionOpen] = useState(true);

  return (
    <div className="main-layout">
      <Sidebar />
      <TransactionContent
        isTransactionOpen={isTransactionOpen}
        setIsTransactionOpen={setIsTransactionOpen}
      />

      <div className="main-content">
        <Header isSidebarOpen={isSidebarOpen} isTransactionOpen={isTransactionOpen}
          setIsTransactionOpen={setIsTransactionOpen} />

        <div className="content-container">
          <div className={`stages-section ${isTransactionOpen ? "open" : "closed"}`}>
            <Routes>
              <Route path="/" element={<TransactionContentStages />} />
            </Routes>
          </div>
        </div>
      </div>
      <RightMenu />
    </div>
  );
};

export default MainLayout;
