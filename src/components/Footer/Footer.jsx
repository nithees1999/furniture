import React from "react";
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">


            <div>
              <h1 className="text-white">Furniture</h1>
            </div>


          </Col>

          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Features</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Our Features</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Pricing</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Affiliate Program</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Press Kit</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Support</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Account</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Help</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Contact Us</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Legal</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Terms of Use</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Social Media</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Twitter</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Product Hunt</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Instagram</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to='#'>Github</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );

};

export default Footer;
