import React, { useState } from "react";
import { useBooks } from "../../context/books-context";
import "./Books.css";
import { Link } from "react-router-dom";
import DisplayBooks from "../DisplayBooks";

const Books = () => {
  const categories = {
    current_read: "current_read",
    read: "read",
    want_to_read: "want_to_read",
  };
  return (
    <div>
      <h1>Books</h1>
      <Link to="search">Search page</Link>
      {Object.entries(categories)?.map(([key, value]) => {
        return (
          <li style={{ listStyle: "none" }} key={key}>
            <h1 style={{ textTransform: "uppercase" }}>{value}</h1>
            <DisplayBooks category={key} />
          </li>
        );
      })}
    </div>
  );
};

export default Books;
