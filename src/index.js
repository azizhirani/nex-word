import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
        <App />
      </Router>
    

</React.StrictMode>
    // {/* <switch>
    //   // <Route path="/App">
    //   //   {/* <App /> 
    //   //  </Route>
    //   // <Route path="/about">
    //   //   {/* <About /> */}
    //   // </Route>
    //   // <Route path="/textForm"> 
    //   //   {/* <TextForm/> */}
    //   // </Route>
    // </switch> */}

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
