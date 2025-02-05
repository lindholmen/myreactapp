import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // ✅ Import ReactDOM correctly
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
