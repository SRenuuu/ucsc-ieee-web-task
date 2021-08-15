import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import EventCountdown from "./EventCountdown";

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <span className="bubble-1"/>
      <span className="bubble-2"/>
      <span className="bubble-3"/>
      <span className="bubble-4"/>
      <span className="bubble-5"/>
      <span className="bubble-6"/>
      <Container>
        <Row className="mb-3">
          <Col xs={12}>
            <div className="content-block">
              <h3 className="banner-mock">
                <span className="text-highlight">Reid</span>Xtreme 2.0
              </h3>
              <p className="mt-2 mb-5">
                24-hour competitive programming competition <br/>for UCSC undergraduates
              </p>
              <p className="mt-5 mb-3">
                <em>Registration opens in</em>
              </p>

              {/*<div className="button-block">*/}
              {/*  <a href="#" className="banner-btn px-5 py-4">*/}
              {/*    Register now!*/}
              {/*  </a>*/}
              {/*</div>*/}

              <EventCountdown/>
            </div>

          </Col>
        </Row>
        {/*<hr/>*/}
        <div className="mouse_scroll_animated mt-5 pt-3">
          <div className="mouse">
            <div className="wheel"/>
          </div>
          <div>
            <span className="m_scroll_arrows one"/>
            <span className="m_scroll_arrows two"/>
            <span className="m_scroll_arrows three"/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
