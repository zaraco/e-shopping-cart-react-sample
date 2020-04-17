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
                text: 'We believe that health information should be free to everyone and we rely on advertising to make this possible on our family of websites: Healthline, Medical News Today, Greatist, and Everyday Family.'
            },

            {
                id: 2,
                name: "basil",
                price: 10,
                amount: 10,
                image: '/Preserve-Fresh-Basil.jpg',
                text: 'Basil is an herb in the mint family. It adds flavor to meals, and its nutrients may provide health benefits.'
            },

            {
                id: 3,
                name: "mango",
                price: 3 ,
                amount: 30,
                image: '/54522547-mango-cubes-and-mango-fruit-isolated-on-a-white-background-.jpg',
                text: 'Mangoes are tropical stone fruits, plump and oval in shape and about the size of a grapefruit. They have an inedible skin that ranges in colour from yellow to green through to red-green, depending on the variety, whilst inside is a soft, edible yellow flesh and a hard inedible stone'
            },

            {
                id: 4,
                name: "banana",
                price: 3.5 ,
                amount: 15,
                image: '/42E9as7NaTaAi4A6JcuFwG-320-80.jpg',
                text: 'Food & Drinks7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily Diet\n' +
                    '7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily DietPlavaneeta Borah, NDTV  |  Updated: August 20, 2018 12:08 ISTTweeterfacebookReddit\n' +
                    '7 Wonderful Benefits Of Banana: How To Include The Fruit In Your Daily Diet\n' +
                    'An instant energy booster, banana is one fruit that is commonly available across the globe. In India, it is given much importance where various regional cuisines use it in making sinful desserts - kheer, malpua, halwa, payasam, sheera, and paniyaram, to name a few.'
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
            <Card style={{width: '18rem'}} >
                <Card.Img style={{width: "210px", height: "200px"}} variant="top" src={product.image} onClick={() => {window.location.href=`/product/${product.id}`}}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text style={{color: "red"}}>
                        {product.price}€
                        <br/>
                        {product.amount} PCS available
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