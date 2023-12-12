import React from 'react';
import { Container, Row, Col } from "reactstrap";
import homey from "../assets/images/homey.jpg";
import "../styles/contact.css";




const Contact = () => {

  return (
    <section className="contact_section">
      <Container>
        <Row>
          <Col lg='6' md='6' >
            <div className="homey">
              <img src={homey} alt="" />
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="contact__content">
              <h2>Make your room feel homey</h2>
              <p>We help people not only to make the room at home better, but we help people to feel a
                more homey and comfortable room, you dont have to worry about the result because of
                these interiors are made by people who are professionals in their fields with an elegant
                and luxurious style and with premium quality materials.</p>
              <p>Contact us if you are interested in working with us furniture2023@gmail.com</p>
              
            </div>


          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Contact;
