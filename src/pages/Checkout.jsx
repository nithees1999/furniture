import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Checkout = () => {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)



    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <h1 className="mb-4 fw-bold">Billing Information</h1>
                        <Form className="billing__form">
                            <FormGroup className="form__group">
                                <input type="text" placeholder="Enter your name" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="email" placeholder="Enter your email" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="number" placeholder="Phone number" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text" placeholder="Address" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text" placeholder="City" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text" placeholder="Postal code" />
                            </FormGroup>

                        </Form>
                    </Col>
                    <Col lg='4'>
                        <div className="checkout__cart">
                            <h5>Total Qty:<span>{totalQty} items</span></h5>
                            <h5>Subtotal:<span>INR.{totalAmount}</span></h5>
                            <h2>Total cost:<span>INR.{totalAmount}</span></h2>
                            <button className="buy__btn auth__btn w-100"><Link to='/login'>Place an order</Link></button>
                        </div>

                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Checkout;
