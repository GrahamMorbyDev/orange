import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Containerfluid, Row, Col } from 'reactstrap';
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
            }
        ]
    }
  render() {
    return (

        <Container>
            <Navbar/>
            <Row>
                <Col>
                <h1>Orange E-commerce</h1>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <div>
                        <h3>Product Name</h3>
                        <logo />
                        <p>Sub title</p>
                        <p>Description</p>
                        <p>Price</p>
                    </div>
                </Col>
                <Col sm>
                    <div>
                        <h3>Product Name</h3>
                        <logo />
                        <p>Sub title</p>
                        <p>Description</p>
                        <p>Price</p>
                    </div>
                </Col>
                <Col sm>
                    <div>
                        <h3>Product Name</h3>
                        <logo />
                        <p>Sub title</p>
                        <p>Description</p>
                        <p>Price</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
