import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer limit={2} />
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
