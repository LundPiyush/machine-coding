import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Books from "./src/components/Books/Books";
import { BooksProvider } from "./src/context/books-context";
import Search from "./src/components/Search/Search";
import { createBrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<Search />}>
          Search page
        </Route>
        <Route path="/" element={<Books />}>
          Main page
        </Route>
      </Routes>
    </div>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BooksProvider>
      <App />
    </BooksProvider>
  </BrowserRouter>
);
export default App;
