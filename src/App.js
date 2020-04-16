import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Jumbotron, Navbar, Form, FormControl, Image, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Products from "./Component/Products";
import CartShow from "./Component/CartShow";
import ModalFooter from "react-bootstrap/ModalFooter";


class App extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <br/>

                            <Jumbotron>
                                <Navbar bg="light" expand="lg">
                                    <Navbar.Brand href="/products">
                                        <Image src="ecom (1).jpg" style={{
                                            height: "50px"
                                        }}>

                                        </Image></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto">
                                            <Nav.Link href="/products">Products</Nav.Link>
                                            <Nav.Link href="/cart">CartShow</Nav.Link>
                                            <Nav.Link href="/Contact">Contact Us</Nav.Link>
                                        </Nav>
                                        <Form inline>
                                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.changeHandlerSearch}/>
                                        </Form>
                                    </Navbar.Collapse>
                                </Navbar>
                                <Router>
                                    <Switch>

                                        <Route path='/products' component={Products}/>
                                        <Route path='/cart' component={CartShow}/>

                                    </Switch>
                                </Router>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
                <ModalFooter>
                    <div style={{textAlign: "center", width: "100%"}}>
                        Copyright ©2020 E-Shopping Center Co. IT Dept.
                    </div>
                </ModalFooter>


            </>
        );
    }
}

export default App;
