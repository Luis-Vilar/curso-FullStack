import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./assets/reset.css";
import "./assets/styles.css";
import { routes } from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
