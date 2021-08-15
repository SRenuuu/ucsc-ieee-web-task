import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Countdown from 'react-countdown';

const EventCountdown = () => {
  // const [seconds, setSeconds] = useState("00");
  // const [minutes, setMinutes] = useState("00");
  // const [hours, setHours] = useState("00");
  // const [days, setDays] = useState("00");
  //
  // useEffect(()=>{
  //     new Date("September 15, 2021 21:00:00").getTime(),
  //     now: new Date().getTime(),
  //
  // }, []);

  const countdownUntil = "August 30, 2021 00:00:00";

  const renderWithFormatting = (value, text) => {
    return (
      <div className="text-center">
        <h3 className="counter">
          {value > 9 ? value : "0" + value}
        </h3>
        <p>
          {value === 1 ? text : text + "s"}
        </p>
      </div>
    );
  }

  const countdownRenderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      return <span>Countdown complete</span>;

    } else {
      // Render countdown
      return (
        <>
          <Row className="mx-0 px-0 mx-lg-5 px-lg-5 countdown">
            <Col xs={3}>
              {renderWithFormatting(days, "Day")}
            </Col>
            <Col xs={3}>
              {renderWithFormatting(hours, "Hour")}
            </Col>
            <Col xs={3}>
              {renderWithFormatting(minutes, "Minute")}
            </Col>
            <Col xs={3}>
              {renderWithFormatting(seconds, "Second")}
            </Col>
          </Row>
        </>
      );
    }
  };

  return (
    <Countdown
      date={new Date(countdownUntil)}
      renderer={countdownRenderer}
    />
  );
};

export default EventCountdown;
