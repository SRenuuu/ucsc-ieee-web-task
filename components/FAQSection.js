import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AccordionCard from "./cards/accordion-card";

const ACCORDION_DATA = [
  {
    status: true,
    content:
      "We will be posting the announcements on our social media and the registration links will be available on our site. You will be required to register for the workshop and competition separately.",
    title: "What is the registration process?"
  },
  {
    status: true,
    content:
      "The competition will have three phases; the proposal submission phase, the implementation phase and the judging phase. The proposal submission stage will be open to all participants. The implementation stage will be for the top 10 teams selected from the proposal submissions.",
    title: "What are the phases of the competition?"
  },
  {
    status: true,
    content:
      "No, you are free to use whatever framework or programming language as you wish. Go crazy and may the best solution win!",
    title: "Are there any restrictions on the programming languages?"
  },
  {
    status: true,
    content:
      "We will be choosing the best 10 teams for the final round based on the proposals submitted in the initial phase. The final 10 will be asked to implement the application and the best among them will be chosen based on various criteria.",
    title: "How will the final app be chosen?"
  }
];

const FAQ = () => {
  return (
    <section className="faq-styles" id="faq">
      <Container>
        <div className="block-title text-center pb-3 pt-0">
          <h2>Frequently Asked Questions</h2>
        </div>
        <hr/>
        <Row className="mt-5 pt-5 text-center">
          <Col>
            <div className="accordion-group faq-accrodion">
              {ACCORDION_DATA.map(({status, title, content}, index) => (
                <AccordionCard
                  key={`accordion-card-${index}`}
                  status={status}
                  title={title}
                  content={content}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
