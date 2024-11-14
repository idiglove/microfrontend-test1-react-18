// @ts-nocheck
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

window.renderReact18 = (containerId, history) => {
  createRoot(document.getElementById(containerId)!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};
