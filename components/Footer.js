import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="site-footer" id="footer">
        <span className="bubble-1"/>
        <span className="bubble-2"/>
        <span className="bubble-3"/>
        <span className="bubble-4"/>
        <span className="bubble-5"/>
        <span className="bubble-6"/>
        <Container>
          <div className="inner-container">
            <Row>
              <Col xs={12}>
                <div className="footer-widget text-center">
                  <div className="widget-title mt-2">
                    <h3>Follow us on</h3>
                  </div>
                  <div className="social-block">
                    <a href="https://twitter.com" className="mx-3" target="_blank">
                      <i className="fa fa-facebook-f"/>
                    </a>
                    <a href="https://facebook.com" className="mx-3" target="_blank">
                      <i className="fa fa-twitter"/>
                    </a>
                    <a href="https://instagram.com" className="mx-3" target="_blank">
                      <i className="fa fa-instagram"/>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>

      <div className="bottom-footer text-center">
        <Container>
          <p>
            Developed by <author>Sandul Renuja</author>
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
