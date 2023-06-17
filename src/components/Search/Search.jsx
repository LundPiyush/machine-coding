import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBooks } from "../../context/books-context";

const Search = () => {
  const { books, changeBooksState } = useBooks();
  const [searchBooks, setSearchBooks] = useState([]);

  const searchHandler = (searchText) => {
    console.log(books);
    setSearchBooks(() =>
      books.filter((book) => {
        return book.author.toLowerCase().includes(searchText.toLowerCase());
      })
    );
  };
  return (
    <div>
      <Link to="/">Return to main page</Link>
      <input
        type="text"
        onChange={(e) => {
          searchHandler(e.target.value);
        }}
      />
      <p>Search books Authour name - (eg.Matthew)</p>
      <div className="books-list">
        {searchBooks.map((book) => {
          const {
            id,
            title,
            author,
            description,
            bookType,
            inStock,
            bookState,
            coverImg,
            originalPrice,
            discountPercent,
            discountPrice,
            totalRatings,
            totalStars,
          } = book;
          return (
            <div key={id} className="card">
              <img src={coverImg} />
              <div className="card-details">
                <p className="card-author-name">{author}</p>
                <p>Category - {bookType}</p>
              </div>
              <select onChange={(e) => changeBooksState(book, e.target.value)}>
                <option
                  value="current_read"
                  selected={bookState === "current_read"}>
                  Current Reading
                </option>
                <option
                  value="want_to_read"
                  selected={bookState === "want_to_read"}>
                  Want to read
                </option>
                <option value="read" selected={bookState === "read"}>
                  Read
                </option>
                <option value="none">None</option>
              </select>
              <div className="card-price">
                <p>Price Rs.{originalPrice}</p>
                <p>Discount Rs.{discountPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
