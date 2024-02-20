import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Reset } from "styled-reset";

// const Global = createGlobalStyle`
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// `;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Reset />
      <App />
    </>
  </React.StrictMode>
);
