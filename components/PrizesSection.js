import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import bronzeLogo from "../assets/images/bronze.webp"
import silverLogo from "../assets/images/silver.webp"
import goldLogo from "../assets/images/gold.webp"

const PrizesSection = () => {
  return (
    <section className="custom-card" id="prizes">
      <Container>
        <div className="block-title text-center pb-3">
          <h2>Prizes</h2>
        </div>
        <hr/>
        <Row className="mt-5 pt-5 text-center">
          <Col lg={4} md={6} sm={12} className="mx-3 mx-md-4 mx-lg-0">
            <div className="single-card bronze">
              <div className="hover-block bronze"/>

              <h2 className="pb-2">2<sup>nd</sup> Runners up</h2>
              <hr/>
              <img src={bronzeLogo} width="100%" className="my-3"/>
              <p className="mb-2">A cash prize of</p>
              <h4 className="mb-2">Rs. 20,000</h4>
              <p>+ swag + certificates + stickers</p>

            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="single-card gold">
              <div className="hover-block gold"/>

              <h2 className="pb-2">Winner</h2>
              <hr/>
              <img src={goldLogo} width="100%" className="my-3 p-2"/>
              <p className="mb-2">A cash prize of</p>
              <h4 className="mb-2">Rs. 50,000</h4>
              <p>+ swag + certificates + stickers</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="single-card silver">
              <div className="hover-block silver"/>

              <h2 className="pb-2">1<sup>st</sup> Runners up</h2>
              <hr/>
              <img src={silverLogo} width="100%" className="my-3 p-3"/>
              <p className="mb-2">A cash prize of</p>
              <h4 className="mb-2">Rs. 30,000</h4>
              <p>+ swag + certificates + stickers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PrizesSection;
