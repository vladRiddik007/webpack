import React from "react";
import { render } from "react-dom";
// import * as $ from "jquery";
// import Post from "@models/Post";
import "./styles/styles.css";
// import xml from "./assets/dataX.xml";
// import csv from "./assets/data.csv";
// import json from "./assets/json";
// import WebpackLogo from "./assets/webpack";
import "./styles/less.less";
import "./styles/scss.scss";
import "./babel";

// const post = new Post("webpack post title", WebpackLogo);
// $("pre")
//   .addClass("code")
//   .html(post.toString());

const App = () => (
  <div className="container">
    <h1>webpack course!!!</h1>
    <hr />
    <div className="logo"></div>

    <pre></pre>
    <hr />
    <pre></pre>

    <div className="box">
      <h2>less</h2>
    </div>
    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));

// console.log("post to string", post.toString());
// console.log("JSON", json);
// console.log("XML", xml);
// console.log("CSV", csv);
