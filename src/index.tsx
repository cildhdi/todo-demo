import React from "react";
import "./index.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import dva from "dva";

const app = dva();

app.model(require("./models/category").default);
app.model(require("./models/todo").default);

app.router(() => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
));

app.start("#root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
