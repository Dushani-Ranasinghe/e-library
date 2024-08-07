import React from "react";
import "./card.css";

const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let title = item.volumeInfo.title; // Extract the title
        let saleability = item.saleInfo.saleability; // Extract the saleability

        if (thumbnail != undefined) {
          return (
            <div className="card" key={item.id}>
              {" "}
              {/* Added key for each item */}
              <img src={thumbnail} alt={title} className="book-img" />
              <div className="bottom">
                <h3 className="title">{title}</h3> {/* Render the title */}
                {saleability === "NOT_FOR_SALE" ? (
                  <p className="amount">Not for sale</p>
                ) : saleability === "FREE" ? (
                  <p className="amount">Free</p>
                ) : (
                  <p className="amount">&#8377;{amount}</p>
                )}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Card;
