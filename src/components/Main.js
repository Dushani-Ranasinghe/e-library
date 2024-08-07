import React from "react";
import "./main.css"

export const Main = () => {
  return (
   <div className="main-container">
     <div className="header">
      <div className="row1">
        <h1>Caption</h1>
      </div>
      <div className="row2">
        <h3>Find your book</h3>
        <div className="search">
            <input type="text" placeholder="Enter Book Name"/>
            <button> <i className="fas fa-search"></i>Search</button>
        </div>
      </div>
    </div>
   </div>
  );
};
