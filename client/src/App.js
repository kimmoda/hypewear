import './App.css';
import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

// logo
import Logo from'./images/hypewear-logo.svg';

// components
import Search from './components/search';
import Filters from './components/filters';
import List from './components/list';

class App extends Component {

  render() {
    return (
      <div>
        <Container>
            <Row noGutters={true}>
              <Col xs="12" sm="12" md="4" lg="4">
                <img src={Logo}></img>
              </Col>
              <Col xs="12" sm="12" md="8" lg="8">
                <Search/>
              </Col>
            </Row>
        </Container>
        <Container fluid={true}>
            <Row noGutters={true}>
              <Col xs="12" sm="12" md="4" lg="2">
                <Filters/>
              </Col>
              <Col xs="12" sm="12" sm="8" lg="10">
                <List/>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
