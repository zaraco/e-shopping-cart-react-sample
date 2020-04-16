import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";

class CartShow extends Component {
    constructor() {
        super();
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart == null) {
            localStorage.setItem('cart', JSON.stringify([]))
            cart = []
        }
        this.state = {
            cart : cart
        }
    }

    clickHandler = () => {
        localStorage.setItem('cart', JSON.stringify([]))

        this.setState({
            cart: []
        })
    }

    render() {
        let total = this.state.cart.length>0 ? this.state.cart.map((item) =>
            <tr>

                <td>{item.name}</td>
                <td>{item.price}</td>
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

                    </tbody>
                </Table>
                <Button variant="info" onClick={this.clickHandler}>Payment</Button>
            </>
        );
    }
}


export default CartShow;