import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BookingProvider } from "./Context/BookingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BookingProvider>
    <App />
  </BookingProvider>
);
