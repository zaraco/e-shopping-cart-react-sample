import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Navbar,
    Form,
    FormControl,
    Image,
    Nav,
    FormGroup,
    ListGroup, ModalFooter
} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Products from "./Component/Products";
import CartShow from "./Component/CartShow";


class App extends Component {
    constructor() {
        let products = JSON.parse(localStorage.getItem('products'))
        if (products == null) {
            localStorage.setItem('products', JSON.stringify([]))
            products = []
        }

        super();
        this.state = {
            products: products,
            filtered: [],
            search: ''
        }


    }
    changeHandlerSearch = (e) => {
        let filtered = []
        if(e.target.value!='') {
            this.state.products.forEach((product) => {
                if (product.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    filtered.push(product)
                }
            })
        }
        this.setState({
            search: e.target.value,
            filtered: filtered
        })
    }

    render() {
        const {filtered} = this.state
        let productsFilter = filtered.length ? filtered.map((product) =>
       <ListGroup>
           <a href="/products"><img src={product.image} style={{width: "40px"}}/> {product.name}</a>
       </ListGroup>
        ): ''
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
                                            <Nav.Link href="/home">Home</Nav.Link>
                                            <Nav.Link href="/products">Products</Nav.Link>
                                            <Nav.Link href="/cart">CartShow</Nav.Link>
                                            <Nav.Link href="/Contact">Contact Us</Nav.Link>
                                        </Nav>
                                        <Form inline>
                                            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.changeHandlerSearch}/>
                                        </Form>
                                    </Navbar.Collapse>
                                </Navbar>
                                <div style={{position: "absolute", top: "140px", right: "140px", zIndex: "40"}}>
                                    <ListGroup>
                                        {productsFilter}
                                    </ListGroup>
                                </div>
                                <br/>
                                <Router>
                                    <Switch>
                                        <Route path='/home'/>
                                        <Route path='/products' component={Products}/>
                                        <Route path='/cart' component={CartShow}/>
                                        <Route path='/contact-us' />

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
