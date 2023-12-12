import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import "./services.css";
import serviceList from "../assets/data/serviceList";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className="service">
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="section__title">Why Choosing Us</h1>

          </Col>

          {serviceList.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}

                className="service__item">



                <span><i class={item.icon}></i></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>

                  <Link to='#'>more info</Link>

                </div>
              </motion.div>


            </Col>
          ))
          }

        </Row>
      </Container>
    </section>
  );
}

export default Services
