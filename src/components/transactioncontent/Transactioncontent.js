import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import "./Transactioncontent.css";

const TransactionContent = ({ isTransactionOpen, setIsTransactionOpen }) => {
  const [openStage, setOpenStage] = useState(null);

  const toggleStage = (stage) => {
    setOpenStage(openStage === stage ? null : stage);
  };

  return (
    <div className={`transaction-content ${isTransactionOpen ? "open" : "closed"}`}>
      <div className="transaction-header">
        <h3>Transaction Contents</h3>
        <div className="toggle-icon" onClick={() => setIsTransactionOpen(!isTransactionOpen)}>
          {isTransactionOpen ? <LeftOutlined /> :
            <img src="/Icons/Rightarrow.svg" alt="rightarrow" className="sidebar-icon" />
          }
        </div>
      </div>

      {isTransactionOpen && (
        <div className="stats">
          <div className="stat-box"><strong>12</strong><p className="count">Stage</p></div>
          <div className="stat-box"><strong>23</strong><p className="count">Subfolder</p></div>
          <div className="stat-box"><strong>1235</strong><p className="count">Document</p></div>
          <img src="/Icons/filter-bars.svg" alt="Documents" className="" />
        </div>
      )}

      {isTransactionOpen && (
        <input type="text" placeholder="Filter by Client/Matter name" className="filter-input" />
      )}

      <div className="stages-list">
        {[
          { id: 1, name: "Stage 1", subStages: ["Stage 1.1", "Stage 1.2"] },
          { id: 2, name: "Stage 2", subStages: ["Stage 2.1", "Stage 2.2"] },
          { id: 3, name: "Stage 3", subStages: ["Stage 3.1", "Stage 3.2"] },
          { id: 4, name: "Stage 4", subStages: ["Stage 4.1", "Stage 4.2"] },
        ].map((stage) => (
          <div key={stage.id}>
            <div className="stage-item" onClick={() => toggleStage(stage.id)}>
              {stage.subStages.length > 0 && (
                <span className="toggle-arrow">{openStage === stage.id ? "▼" : "▶"}</span>
              )}
              <img src="/Icons/folder-3.svg" alt="Documents" className="" />
              <span className="stagename"> {stage.name}</span>

            </div>

            {openStage === stage.id &&
              stage.subStages.map((sub, index) => (
                <div key={index} className="sub-folder">
                  <span className="toggle-arrow"> ▶</span>
                  <img src="/Icons/folder-3.svg" alt="Documents" className="" />
                  <span className="stagename"> {sub}</span>


                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionContent;
