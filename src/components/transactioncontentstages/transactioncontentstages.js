import React from "react";
import { Table, Tag, Input, Dropdown } from "antd";
import { DownOutlined, FilterOutlined, FileOutlined } from "@ant-design/icons";
import "./TransactionContentStages.css";

const columns = [
  { title: "#", dataIndex: "id", key: "id" },
  { title: "Phase", dataIndex: "phase", key: "phase" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = status === "Completed" ? "#00BD8B" : status === "Continuing" ? "#FFC80B" : "#F72142";
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Document",
    dataIndex: "document",
    key: "document",
    render: (text) => (text ? <img src="/Icons/wordfile.svg" alt="Documents" className="wordfile" /> : "-"),
  },
  { title: "Responsible Party", dataIndex: "responsible", key: "responsible" },
  { title: "Update Date", dataIndex: "date", key: "date" },
];

const data = [
  { id: 1, phase: "İŞLEM DOSYALARI", status: "Continuing", document: "V6", responsible: "Goksu Safi Işık", date: "11.12.2022" },
  { id: 2, phase: "Aşama / Phase", status: "Completed", document: "", responsible: "Goksu Safi Işık", date: "11.12.2022" },
  { id: 3, phase: "Aşama / Phase", status: "Not Started", document: "V6", responsible: "Goksu Safi Işık", date: "11.12.2022" },
];

const TransactionContentStages = () => {
  return (
    <div className="stages-container">
      <div className="stages-header">
        <Dropdown overlay={<></>} trigger={["click"]}>
          <>
            <img src="/Icons/folder-3.svg" alt="Documents" className="" />
            <div className="filter-dropdown">All (selected folder) <DownOutlined /></div></>
        </Dropdown>

        <Input placeholder="Search within all folder`s and content, or a specific folder`s content" className="search-bar" />

        <Dropdown overlay={<></>} trigger={["click"]}>
          <div className="status-filter">All Status <DownOutlined /></div>
        </Dropdown>
        <img src="/Icons/arrow-down-to-line.svg" alt="download" className="" />

        <FilterOutlined className="filter-icon" />
      </div>

      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default TransactionContentStages;

