import React, {Component} from "react";
import {Jumbotron, Figure} from "react-bootstrap";
import {faTwitter, faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faMailBulk } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Jumbotron>
                    <Figure>
                        <Figure.Image
                            width={400}
                            height={250}
                            alt="contact us"
                            src="contact-us.png"
                        />

                        <Figure.Caption>
                            <FontAwesomeIcon icon={faMailBulk} inline/>
                            <span> zahra69@gmail.com</span>
                        </Figure.Caption>
                        <br/>
                        <FontAwesomeIcon icon={faAddressBook} inline/>
                        <span> Liguria,
                            Genova,
                            Italy
                        </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faFacebookSquare}/>
                        <span> @ZAHRA </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faTwitter}/>
                        <span> @ZAHRA90 </span>

                        <br/>
                        <br/>

                        <FontAwesomeIcon icon={faInstagram}/>
                        <span> @ZAHRA90 </span>
                    </Figure>

                </Jumbotron>
            </>
        );
    }
}

export default Contact;