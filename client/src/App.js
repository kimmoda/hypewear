import './App.css';
import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

console.log(Container);

class App extends Component {

  render() {
    return (
    <Container fluid={true}>
        <Row noGutters={true}>
          <Col xs="4" sm="4" lg="2">.col-6 .col-sm-4</Col>
          <Col xs="4" sm="4" lg="2">.col-6 .col-sm-4</Col>
          <Col sm="4" xm="4" lg ="2">.col .col-sm-4</Col>
          <Col sm="4" xm="4" lg ="2">.col .col-sm-4</Col>
          <Col xm="4" lg ="2">.col .col-sm-4</Col>
          <Col sm="4" xm="4" lg ="2">.col .col-sm-4</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
