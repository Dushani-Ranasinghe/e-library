import React from "react";
import "./card.css";
import Book1 from "../assets/books/got.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={Book1} alt="got" className="book-img" />
      <div className="bottom">
        <h3 className="title">Game of Thrones</h3>
        <p className="amount">&#8377;3290</p>
      </div>
    </div>
  );
};

export default Card;
