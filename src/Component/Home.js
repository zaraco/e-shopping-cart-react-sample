import React, {Component} from "react";
import {Jumbotron, Button} from "react-bootstrap";

class Home extends Component {
    constructor() {
        super();
    }

    clickHandler = () => {
        window.location.href = '/products'
    }

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Hello, My Clients!</h1>
                    <p>
                        This is a website of e-shopping for you.
                        I hope, you satisfy from this page.
                    </p>
                    <p>
                        <Button variant="info" onClick={this.clickHandler}>Learn more</Button>
                    </p>
                </Jumbotron>
            </>
        );
    }
}

export default Home;