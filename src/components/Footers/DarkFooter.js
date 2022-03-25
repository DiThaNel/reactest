/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
              >
                Terms and conditions
              </a>
            </li>
            <li>
              <a
                href="#"
              >
                Privacy Statement
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          <a>
            Follow us:
          </a> 
          <a
          href="#"
          target="_blank"
          id="facebook-tooltip"
          >
           <i className="fab fa-facebook-square"></i>
           <p className="d-lg-none d-xl-none"></p>
           </a>
          <a
          href="#"
          target="_blank"
          id="twitter-tooltip"
          >
          <i className="fab fa-twitter"></i>
          <p className="d-lg-none d-xl-none"></p>
          </a>
          
           <a
          href="#"
          target="_blank"
          id="linkedin-tooltip"
          >
           <i className="fab fa-linkedin"></i>
           <p className="d-lg-none d-xl-none"></p>
           </a>            
          
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
