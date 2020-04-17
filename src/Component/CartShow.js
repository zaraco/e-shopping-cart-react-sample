import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {Button, Alert} from "react-bootstrap";

class CartShow extends Component {
    constructor() {
        super();
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart == null) {
            localStorage.setItem('cart', JSON.stringify([]))
            cart = []
        }
        let total = 0
        cart.forEach((product) => {
            total += product.price
        })
        this.state = {
            cart: cart,
            message: '',
            total: total
        }
    }

    clickHandler = () => {

        localStorage.setItem('cart', JSON.stringify([]))

        this.setState({
            cart: [],
            message: 'you paid successfully'
        })
    }

    render() {
        let alert = this.state.message != '' ? <Alert variant="success">{this.state.message}</Alert> : ''
        console.log(this.state.message)
        let total = this.state.cart.length > 0 ? this.state.cart.map((item) =>
            <tr>

                <td>{item.name}</td>
                <td>{item.price} €</td>
                <td><img src={item.image} style={{height: '40px'}}/></td>

            </tr>
        ) : null

        return (
            <>
                <Table striped bordered hover>
                    <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                    </thead>

                    <tbody>

                    {total}
                    <tr>
                        <td style={{color: 'red', fontWeight: 'bold'}}>total</td>
                        <td>{this.state.total}</td>
                        <td></td>

                    </tr>
                    </tbody>
                </Table>
                {alert}
                <Button variant="info" onClick={this.clickHandler}>Payment</Button>
            </>
        );
    }
}


export default CartShow;