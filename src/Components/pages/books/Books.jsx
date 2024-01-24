import React, { useContext, useState } from "react";
import "./books.css";
import { SpinnerCircular } from "spinners-react";
import { MyContext } from "../../../assets/Context/Context";
const Books = ({ handleBook }) => {
  const [category, setCategory] = useState("Story");
  const nameTest = localStorage.getItem("name");
  console.log(nameTest);
  const { books } = useContext(MyContext);
  console.log(books);
  console.log(category);
  return (
    <div className="books-page">
      <div className="books-features">
        <div className="books-features-container">
          <div className="books-features-wrapper">
            <p style={{ color: "#fff" }}>Category</p>
            <select
              name=""
              id=""
              className="dropDown"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Story">Story</option>
              <option value="Science">Science</option>
              <option value="Drama">Drama</option>
            </select>
          </div>
          <div className="books-features-wrapper">
            <p style={{ color: "#fff" }}>Type</p>
            <select name="" id="" className="dropDown">
              <option value="Story">Novel</option>
              <option value="Science">Discovery</option>
              <option value="Animes">Animes</option>
            </select>
          </div>
          <div className="books-features-wrapper">
            <p style={{ color: "#fff" }}>Language</p>
            <select name="" id="" className="dropDown">
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Yoruba">Yoruba</option>
            </select>
          </div>
        </div>
        <div className="filter-icon-wrapper">
          <div className="filter-icon-holder">
            <img src="src/Components/Images/mi_filter.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="list-of-books">
        {books.map((e) =>
          e.categories === category ? (
            <div className="the-books-container" key={e.id}>
              <div className="the-books-wrapper">
                <div className="the-book-image">
                  <img
                    src={e.images}
                    alt=""
                  />
                </div>
                <div className="the-book-contents">
                  <p>Name: {e.name}</p>
                  <p>Author: {e.author}</p>
                  <p>Book ID : 20511xT</p>
                  <p>Pages: 255</p>
                  <p>Publisher : Ananda publishers</p>
                  <p>Price : ₹ 379</p>
                </div>
              </div>
              <div className="btn-delete">DELETE</div>
            </div>
          ) : null
        )}
      </div>
      <div className="add-icon">
        <div className="add-icon-holder" onClick={handleBook}>
          <img src="src/Components/Images/mingcute_add-line.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Books;
