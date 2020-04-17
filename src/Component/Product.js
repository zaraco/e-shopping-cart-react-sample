import React, {Component} from "react";
import {Col, Figure} from "react-bootstrap";
import Row from "react-bootstrap/Row";

class Product extends Component {
    constructor(props) {
        super(props);
        let id = this.props.match.params.id
        let products = JSON.parse(localStorage.getItem('products'))
        if (products == null) {
            localStorage.setItem('products', JSON.stringify(products))
            products = []
        }
        let selectedProduct
        products.forEach((product) => {
            if (product.id == id) {
                selectedProduct = product
            }
        })
        this.state = {
            product: selectedProduct
        }
    }

    render() {

        return (
            <>
                <Row>
                    <Col md={4}>
                        <Figure>
                            <Figure.Image
                                width="100%"
                                alt="171x180"
                                src={this.state.product.image}
                            />

                        </Figure>
                    </Col>
                    <Col>
                        <h1>
                            {this.state.product.name}
                        </h1>

                        <p>
                            {this.state.product.text}
                        </p>

                        <p>
                            Amount: {this.state.product.amount} Pcs
                        </p>
                        <p>
                            Price: {this.state.product.price} €
                        </p>

                       <span style={{color: "red", fontWeight: "bold"}}>
                             Carrier: Free
                       </span>

                    </Col>
                </Row>
            </>
        );
    }
}

export default Product;