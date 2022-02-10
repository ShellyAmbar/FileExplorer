import React from "react";
import "./ListItem.css";

const Index = ({ fileName, onClickOption }) => {
  return (
    <div className="item-container" onClick={() => onClickOption(fileName)}>
      <h1> {fileName}</h1>
    </div>
  );
};

export default Index;