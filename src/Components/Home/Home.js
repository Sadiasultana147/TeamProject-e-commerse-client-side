import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Slider from "../Slider/Slider";
import Categories from "../AllList/Categories/Categories";

const Home = () => {
  const [highlights, setHighlights] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setHighlights(data));
  }, []);

  return (
    <div>
      <SearchBar></SearchBar>
      <Slider></Slider>

      <div
        className="my-5 p-5 mx-auto home"
        style={{ backgroundColor: "#FBF3E4" }}
      >
        <Row md={4}>
          {highlights.map((highlight) => (
            <Container className="d-flex align-items-center justify-content-center">
              <Col>
                <img
                  src={highlight.img}
                  alt=""
                  className="w-75 p-4 img-fluid home-img"
                />
              </Col>
              <Col className="highlight-details">
                <h5
                  style={{ color: "tomato", fontWeight: "bold" }}
                  className="home-title"
                >
                  {highlight.title}
                </h5>
                <p className="">{highlight.description}</p>
              </Col>
            </Container>
          ))}
        </Row>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Home;
