import React from "react";
import "./main.css";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="header">
        <div className="row1">
          <h1>Explore the World of Books</h1>
          <p>
            Discover a vast collection of books at your fingertips with our
            e-library <br/> powered by the Google Books API
          </p>
        </div>
        <div className="row2">
          <h3>Find your book</h3>
          <div className="search">
            <input type="text" placeholder="Enter Book Name" />
            <button>
              {" "}
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
