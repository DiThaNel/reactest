import React from "react";

// core components
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import LandingPage from "./Pages/LandingPage.js";

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
        <LandingPage />
        <DarkFooter />
    </>
  );
}

export default Index;
