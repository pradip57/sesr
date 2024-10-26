import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutingConfig from "./config/routing.config";
import "./assets/global.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutingConfig />
  </StrictMode>
);
