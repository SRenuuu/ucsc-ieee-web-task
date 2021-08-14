import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import horseLogo from "../assets/images/re-red-horse-logo.png";

const AboutSection = () => {
  return (
    <section className="about-styles" id="about">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="image-block">
              <img src={horseLogo} alt="Awesome Image"/>
            </div>
          </Col>
          <Col lg={6}>
            <div className="content-block">
              <div className="block-title text-left pb-2">
                <h2>About <b>ReidExtreme</b></h2>
              </div>
              <hr/>
              <div className="pt-5">
                <p>
                  ReidXtreme is an annual 24-hour competitive programming competition for UCSC undergraduates
                  organised by the IEEE Student Branch of UCSC.
                </p>
                <p className="font-weight-bold font-italic">
                  ReidExtreme 2.0 is coming up! Stay tuned!
                </p>
                <p>
                  Meanwhile, gear-up get ready to put your programming knowledge and problem solving
                  skills to the ultimate test!
                </p>
              </div>

              {/*<ul className="feature-lists">*/}
              {/*  <li>*/}
              {/*    <i className="fa fa-check"></i> Refresing to get such a*/}
              {/*    personal touch.*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <i className="fa fa-check"></i> Duis aute irure dolor in*/}
              {/*    reprehenderit in voluptate.*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <i className="fa fa-check"></i> Velit esse cillum dolore eu*/}
              {/*    fugiat nulla pariatur.*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
