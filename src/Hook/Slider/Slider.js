import React from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import image1 from "../../Images/11.jpg";
import image3 from "../../Images/3.png";
import image2 from "../../Images/9.png";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <Row className="align-items-center">
            <Col md={6}>
              <h2
                className="slider-text"
                style={{ fontSize: "45px", fontWeight: "700" }}
              >
                NEW YEAR'S
              </h2>
              <h1
                className="slider-text"
                style={{ fontSize: "75px", fontWeight: "900" }}
              >
                FLASH SALE
              </h1>
              <Button className="slider-text slider-btn mt-3">Explore</Button>
            </Col>
            <Col md={6}>
              <div>
                <img
                  className="image-fluid slider-img p-5"
                  src={image1}
                  alt="First slide"
                />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Row className="align-items-center">
            <Col md={4}>
              <h2 className="slider-text">NEW YEAR</h2>
              <h2 className="slider-text">ENTERTAINMENT FEST</h2>
            </Col>
            <Col md={8} className="text-center">
              <img
                className="image-fluid slider-img p-5"
                src={image3}
                alt="Second slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Row className="align-items-center">
            <Col md={5}>
              <h2 className="slider-text">NEW YEAR, NEW YOU!</h2>
              <h5 className="slider-text">
                GET MOVING IN THE SEASON'S NEW BRIGHTS.
              </h5>
            </Col>
            <Col md={7} className="text-center">
              <img
                className="image-fluid slider-img pt-4"
                src={image2}
                alt="First slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
