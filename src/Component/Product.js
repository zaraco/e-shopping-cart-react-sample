import React, {Component} from "react";
import {Figure} from "react-bootstrap";

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
            if(product.id == id){
                selectedProduct = product
            }
        })
        this.state={
            product: selectedProduct
        }
    }

    render() {

        return (
            <>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={this.state.product.image}
                    />
                    <Figure.Caption>
                        ....
                    </Figure.Caption>
                </Figure>



            </>
        );
    }
}

export default Product;