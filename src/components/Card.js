import React, { useState } from "react";
import "./card.css";
import Model from "./Model";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let title = item.volumeInfo.title;
        let saleability = item.saleInfo.saleability;

        if (thumbnail !== undefined) {
          return (
            <div className="card" key={item.id} onClick={() => { setShow(true); setItem(item); }}>
              <img src={thumbnail} alt={title} className="book-img" />
              <div className="bottom">
                <h3 className="title">{title}</h3>
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

        return null;
      })}
      {show && <Model key={bookItem.id} show={show} item={bookItem} onClose={() => setShow(false)} />}
    </>
  );
};

export default Card;
