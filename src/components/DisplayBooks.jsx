import React from "react";
import { useBooks } from "../context/books-context";
import DisplayCard from "./DisplayCard";

const DisplayBooks = ({ category }) => {
  const { books } = useBooks();

  const categoryBooks = books.filter(({ bookState }) => bookState === category);

  return (
    <div className="books-list">
      {categoryBooks.map((book) => (
        <DisplayCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default DisplayBooks;
