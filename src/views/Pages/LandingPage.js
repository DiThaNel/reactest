import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="mr-auto text-left" md="10">
                <h3 className="titleheader">Lorem ipsum dolor sit amet</h3>
                <h5 className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper elit eu dolor accumsan, ac aliquet metus malesuada. Curabitur
                condimentum tincidunt odio. Vivamus nec ullamcorper justo, eu tempus dolor. Aliquam porttitor eros at rhoncus faucibus. Praesent nec feugiat libero. Cras
                aliquet, nisi vitae viverra eleifend, diam justo auctor est, et commodo lorem eros quis libero. Vivamus vel ante in velit pulvinar fringilla. Aliquam erat
                volutpat.
                </h5>

                <h5 className="description">
                Phasellus consectetur egestas faucibus. Duis turpis ante, interdum nec laoreet luctus, euismod sit amet odio. Donec vitae urna metus. Mauris imperdiet
                dolor vitae aliquam ultrices. Donec sed magna quis ex maximus aliquet. Suspendisse rutrum imperdiet lacus lobortis fringilla. Maecenas sit amet dolor
                tristique, posuere nunc vitae, commodo mi.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
              <Col md="6">
                  <h5 className="description-padded">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper elit
                  eu dolor accumsan, ac aliquet metus malesuada. Curabitur condimentum
                  tincidunt odio. Vivamus nec ullamcorper justo, eu tempus dolor. Aliquam porttitor
                  eros at rhoncus faucibus. Praesent nec feugiat libero. Cras aliquet, nisi vitae
                  viverra eleifend, diam justo auctor est, et commodo lorem eros quis libero.
                  Vivamus vel ante in velit pulvinar fringilla. Aliquam erat volutpat.
                  </h5>
                  <h5 className="description-padded">
                  Phasellus consectetur egestas faucibus. Duis turpis ante, interdum nec laoreet
                  luctus, euismod sit amet odio. Donec vitae urna metus. Mauris imperdiet dolor
                  vitae aliquam ultrices. Donec sed magna quis ex maximus aliquet. Suspendisse
                  </h5>
                </Col>
                <Col md="6">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Southern-Blossom.jpg").default + ")",
                    }}
                  ></div>
                  </Col>
              </Row>
              <Row>
              <Col md="6">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/banner-2.jpg").default + ")",
                    }}
                  ></div>
                  </Col>
              <Col md="6">
                  <h5 className="description-padded">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper elit
                  eu dolor accumsan, ac aliquet metus malesuada. Curabitur condimentum
                  tincidunt odio. Vivamus nec ullamcorper justo, eu tempus dolor. Aliquam porttitor
                  eros at rhoncus faucibus. Praesent nec feugiat libero. Cras aliquet, nisi vitae
                  viverra eleifend, diam justo auctor est, et commodo lorem eros quis libero.
                  Vivamus vel ante in velit pulvinar fringilla. Aliquam erat volutpat.
                  </h5>
                  <h5 className="description-padded">
                  Phasellus consectetur egestas faucibus. Duis turpis ante, interdum nec laoreet
                  luctus, euismod sit amet odio. Donec vitae urna metus. Mauris imperdiet dolor
                  vitae aliquam ultrices. Donec sed magna quis ex maximus aliquet. Suspendisse
                  </h5>
                </Col>
                
              </Row>
              <Row>
              <Col className="mr-auto text-left" md="10">
              <h3 className="titleheader">Lorem ipsum dolor sit amet</h3>
                <h5 className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper elit eu dolor accumsan, ac aliquet metus malesuada. Curabitur
                condimentum tincidunt odio. Vivamus nec ullamcorper justo, eu tempus dolor. Aliquam porttitor eros at rhoncus faucibus. Praesent nec feugiat libero. Cras
                aliquet, nisi vitae viverra eleifend, diam justo auctor est, et commodo lorem eros quis libero. Vivamus vel ante in velit pulvinar fringilla. Aliquam erat
                volutpat.
                </h5>

                <h5 className="description">
                Phasellus consectetur egestas faucibus. Duis turpis ante, interdum nec laoreet luctus, euismod sit amet odio. Donec vitae urna metus. Mauris imperdiet
                dolor vitae aliquam ultrices. Donec sed magna quis ex maximus aliquet. Suspendisse rutrum imperdiet lacus lobortis fringilla. Maecenas sit amet dolor
                tristique, posuere nunc vitae, commodo mi.
                </h5>
              </Col>
            </Row>
            <Button
                      className="btn btn-info2 btn-lg"
                      color="info"
                      href="#"
                      onClick={(e) => e.preventDefault()}                    
                    >MORE INFO</Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
