import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/driedflowers.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <h5 className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper elit eu
            dolor accumsan, ac aliquet metus malesuada. Curabitur condimentum tincidunt
            odio. Vivamus nec ullamcorper justo, eu tempus dolor.
            </h5>
            <div className="text-left">
              <Button
                className="btn btn-info btn-lg btn btn-info"
                color="info"
                href="#"
                onClick={(e) => e.preventDefault()}
              >MORE INFO
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
