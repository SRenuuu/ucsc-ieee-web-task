import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {IoBookSharp, IoCheckmarkSharp, IoRocketSharp, IoTrophySharp} from "react-icons/io5";

const TimelineSection = () => {
  return (

    <section className="timeline-styles" id="timeline">
      <Container>
        <div className="block-title text-center pb-3">
          <h2>Timeline</h2>
        </div>
        <hr/>
        <Row className="mt-5 pt-5">
          <Col xs={12}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "#273167"}}
                contentArrowStyle={{borderRight: '7px solid  #273167'}}
                date="30th August 2021"
                dateClassName={"timeline-box-date"}
                iconStyle={{background: "#273167"}}
                icon={<IoRocketSharp/>}
              >
                <h3 className="vertical-timeline-element-title">Event Launch 🎉</h3>
                <hr className="timeline-box-hr"/>
                <p>
                  We will be officially kicking off and opening registrations. Join our events and stay connected with
                  our social media to know the latest updates. See you soon!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "#c0392b"}}
                contentArrowStyle={{borderRight: '7px solid  #c0392b'}}
                date="7th September 2021"
                iconStyle={{background: "#c0392b"}}
                icon={<IoBookSharp/>}
              >
                <h3 className="vertical-timeline-element-title">Workshop 1 📚</h3>
                <hr className="timeline-box-hr"/>
                <p>
                  Conducted by one of our knowledge partners to give you an intro to mobile application development and
                  give you a head start. Those who wish to enter must register beforehand. Don't brain lag :P
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "#777b92"}}
                contentArrowStyle={{borderRight: '7px solid #777b92'}}
                date="7th September 2021"
                iconStyle={{background: "#777b92"}}
                icon={<IoBookSharp/>}
              >
                <h3 className="vertical-timeline-element-title">Workshop 2 📚</h3>
                <hr className="timeline-box-hr"/>
                <p>
                  Conducted by one of our knowledge partners to give you an intro to mobile application development and
                  give you a head start. Those who wish to enter must register beforehand. Don't brain lag :P
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "#273167"}}
                contentArrowStyle={{borderRight: '7px solid  #273167'}}
                date="14th August 2021"
                dateClassName={"timeline-box-date"}
                iconStyle={{background: "#273167"}}
                icon={<IoCheckmarkSharp/>}
              >
                <h3 className="vertical-timeline-element-title">Selection Rounds 🎯</h3>
                <hr className="timeline-box-hr"/>
                <p>
                  This is the selection stage of the competition. Participants will get practice questions and 6 hours
                  to compete!
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: "#c0392b"}}
                contentArrowStyle={{borderRight: '7px solid  #c0392b'}}
                date="21st September 2021"
                iconStyle={{background: "#c0392b"}}
                icon={<IoTrophySharp/>}
              >
                <h3 className="vertical-timeline-element-title">Final Competition 🏆</h3>
                <hr className="timeline-box-hr"/>
                <p>
                  This is the final stage of the competition. This extreme programming competition will go on for 24
                  hours straight!
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TimelineSection;
