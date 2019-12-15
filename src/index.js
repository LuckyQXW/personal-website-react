import React from "react";
import ReactDOM from "react-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
import Index from "views/Index.js";

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
