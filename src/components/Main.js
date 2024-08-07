import React, { useState } from "react";
import "./main.css";
import Card from "./Card";
import axios from "axios";

export const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData,setData]= useState([]);
  const searchbook= (e)=>{
    if(e.key === "Enter"){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDkvobdhpM8i-USZyZIBiXlhCc9N-VCYQI'+'&maxResults=40')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    }
  }

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
            <input type="text" placeholder="Enter Book Name" value={search} onChange={e=>setSearch(e.target.value)} onKeyDown={searchbook}/>
            <button>
              {" "}
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        
        {
            <Card book={bookData}/>
        }
      </div>
    </div>
  );
};
