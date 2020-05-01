import React from "react";
import ReactDOM from "react-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import "assets/css/style.css";

// pages
import Index from "views/Index.js";

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
