import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./src/context/auth-context";
import Nav from "./src/components/Nav/Nav";

function App() {
  return (
    <div>
      App here
      <Nav />
    </div>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
export default App;
