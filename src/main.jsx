import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Путь к стилям с учётом папки /styles/
import "./styles/index.css";
import "./styles/variables.css";
import "./styles/header.css";
import "./styles/hero.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
