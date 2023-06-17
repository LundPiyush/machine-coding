import React from "react";
import "./DisplayCard.css";
import { useBooks } from "../context/books-context";

const DisplayCard = ({ book }) => {
  const { id, title, author, bookState, coverImg } = book;
  const { changeBooksState } = useBooks();

  return (
    <div className="books" key={id}>
      <div className="card">
        <img src={coverImg} width={10} height={200} />
        <p>{author}</p>
        <select onChange={(e) => changeBooksState(book, e.target.value)}>
          <option value="current_read" selected={bookState === "current_read"}>
            Currently Reading
          </option>
          <option value="read" selected={bookState === "read"}>
            Read
          </option>
          <option value="want_to_read" selected={bookState === "want_to_read"}>
            Want to Read
          </option>
          <option value="None">None</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayCard;
