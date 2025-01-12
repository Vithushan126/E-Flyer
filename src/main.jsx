import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
import "rc-slider/assets/index.css"; //rc slider css

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
