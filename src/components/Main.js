import React, { useState, useRef,useEffect } from "react";
import "./main.css";
import Card from "./Card";
import axios from "axios";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const containerRef = useRef(null);

  const searchBook = () => {
    const API_KEY = "AIzaSyDkvobdhpM8i-USZyZIBiXlhCc9N-VCYQI";
    const maxResults = 40;
    const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=${maxResults}`;

    axios
      .get(searchURL)
      .then((res) => {
        setData(res.data.items);
        // Scroll to the container position
        if (containerRef.current) {
          window.scrollTo({
            top: containerRef.current.offsetTop - 10,
            behavior: "smooth"
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchBook();
    }
  };

   // useEffect to scroll to the container when bookData is updated
   useEffect(() => {
    if (bookData.length > 0 && containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop - 50, // Adjust offset as needed
        behavior: "smooth"
      });
    }
  }, [bookData]);

  return (
    <div className="main-container">
      <div className="header">
        <div className="row1">
          <h1>Explore the World of Books</h1>
          <p>
            Discover a vast collection of books at your fingertips with our
            e-library <br /> powered by the Google Books API
          </p>
        </div>
        <div className="row2">
          <h3>Find your book</h3>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={searchBook}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container" ref={containerRef}>
        {<Card book={bookData} />}
      </div>
    </div>
  );
};
