import { createContext, useContext, useState } from "react";
import { booksData } from "../data/books";

const BooksContext = createContext(null);

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(booksData);
  const filteredBooks = useState([]);

  const changeBooksState = (bookObj, value) => {
    setBooks(
      books.map((book) =>
        book.id === bookObj.id ? { ...book, bookState: value } : book
      )
    );
  };

  const currentReadingBooks = books.filter(
    (books) => books.bookState === "current_read"
  );

  const readBooks = books.filter((books) => books.bookState === "read");
  const wantToReadBooks = books.filter(
    (books) => books.bookState === "want_to_read"
  );
  return (
    <BooksContext.Provider
      value={{
        currentReadingBooks,
        readBooks,
        wantToReadBooks,
        changeBooksState,
        books,
      }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
