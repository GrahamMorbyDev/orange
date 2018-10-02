import React, {Component} from 'react';


import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'reactstrap';
import './App.css';
import Navbar from './navbar';


class App extends Component {
    state = {
        products: [
            {
                name: 'Iphone X',
                subTitle: '64gb Black',
                description: 'A 64 gb IPhone in Black with Awesome new features',
                image: 'Link here',
                price: '$899.99'
            },
            {
                name: 'Iphone 8 Plus',
                subTitle: '128gb Silver',
                description: 'A 128 gb IPhone in Black with Awesome new features',
                image: 'Link here',
                price: '$749.99'
            },
            {
                name: 'Iphone 7 Plus',
                subTitle: '32gb Silver',
                description: 'A 32 gb IPhone in Black with Awesome new features',
                image: 'Link here',
                price: '$549.99'
            }
        ]
    };

    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                    <Row>

                            {this.state.products.map((product, index) => (
                                <Col>
                                    <p>{product.name}</p>
                                    <p>{product.subTitle}</p>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                </Col>
                            ))}

                    </Row>
                </Container>
            </div>

        );
    }
}

export default App;
