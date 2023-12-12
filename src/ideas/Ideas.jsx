import React from 'react';
import "./ideas.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/heroImg.jpg";
import { Link } from "react-router-dom";

const Ideas = () => {
  return (
    <section className="idea_section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="idea__content">
              <h2>Visualize your ideas with us</h2>
              <p>We are ready to help you build and also realize the room design that you dream of with
                our experts and also the best category recommendations from us</p>
              <h3>Modern</h3>
              <p> Modern design is a term in the design world that refers to a house with a clean design,
                simple color choices, the use of materials including metal, glass, and steel, and is
                usually accompanied by cleanlines.</p>
              <div className="idea__category d-flex align-items-center justify-content-between">
                <span className="category">Contemporary</span>
                <i class="ri-add-line"></i>
              </div>
              <div className="idea__category d-flex align-items-center justify-content-between">
                <span className="category">Minimalis</span>
                <i class="ri-add-line"></i>
              </div>
              <div className="idea__category d-flex align-items-center justify-content-between">
                <span className="category">Industrial</span>
                <i class="ri-add-line"></i>
              </div>
              <Link to='#'>See more category</Link>

            </div>
          </Col>
          <Col lg='6' md='6' >
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Ideas;
