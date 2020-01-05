import React from "react";

// core components
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import BasicElements from "./index-sections/BasicElements.js";
import Carousel from "./index-sections/Carousel.js";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import HomeHeader from "../components/Headers/HomeHeader";
import Bio from "./index-sections/Bio";
import Projects from "./index-sections/Projects";
import Tabs from "./index-sections/Tabs";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomeHeader />
        <div className="main">
          <Bio />
          <Projects />
          <Tabs />
          <Carousel />
          <BasicElements />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
