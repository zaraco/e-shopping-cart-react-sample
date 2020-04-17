import React, {Component} from "react";
import {Card, Button, CardGroup} from "react-bootstrap";

class Products extends Component {
    constructor() {
        super();
        const products = [
            {
                id: 1,
                name: "parsley",
                price: 8,
                amount: 20,
                image: '/italian-parsley-leaves.jpg',
            },

            {
                id: 2,
                name: "basil",
                price: 10,
                amount: 10,
                image: '/Preserve-Fresh-Basil.jpg',
            },

            {
                id: 3,
                name: "mango",
                price: 3 ,
                amount: 30,
                image: '/54522547-mango-cubes-and-mango-fruit-isolated-on-a-white-background-.jpg',
            },

            {
                id: 4,
                name: "banana",
                price: 3.5 ,
                amount: 15,
                image: '/42E9as7NaTaAi4A6JcuFwG-320-80.jpg',
            }

        ]
        localStorage.setItem('products', JSON.stringify(products))

        this.state = {
            products: products,

        }
    }



    render() {
        const {
            products
        }

            = this.state
        let productsCart = products.length ? products.map((product) =>
            <Card style={{width: '18rem'}}>
                <Card.Img style={{width: "210px", height: "200px"}} variant="top" src={product.image}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text style={{color: "red"}}>
                        {product.price}, {product.amount} available
                    </Card.Text>
                    <Button variant="primary" onClick={() => {
                        let cart = JSON.parse(localStorage.getItem('cart'))
                        if (!cart) {
                            cart = []
                        }
                        cart.push(product)

                        localStorage.setItem('cart', JSON.stringify(cart))
                        console.log(cart)
                    }}>Add to Cart</Button>
                </Card.Body>
            </Card>
        ) : ''

        return (
            <div>
                <CardGroup>

                    {productsCart}

                </CardGroup>


            </div>
        );
    }
}

export default Products;