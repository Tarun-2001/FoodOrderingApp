import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>); // This root object will render as html in browser dom
