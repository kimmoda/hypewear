import './App.css';
import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

// image
import Logo from'./images/hypewear-logo.svg';

// components
import Search from './components/search';
import Filters from './components/filters';
import List from './components/list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  getProducts () {
    fetch('http://api.shopstyle.com/api/v2/products?pid=uid3204-40024198-72&fts=red+dress&limit=100', {
      method: 'get'
    }).then(response => {
      return response.json()
    }).then(
      data => {
      console.log(data)
      this.setState({
        data: data
      })
    })
  }

  componentDidMount() {
    this.getProducts()
  }


  render() {
    if (this.state.data) return (
      <div>
        <header className="header">
          <Container className="header__container">
              <Row>
                <Col xs="12" sm="12" md="4" lg="4">
                  <img className="logo__image" src={Logo}></img>
                </Col>
                <Col xs="12" sm="12" md="8" lg="8">
                  <Search/>
                </Col>
              </Row>
          </Container>
        </header>
        <div className="bg"></div>
        <Container fluid={true}>
            <Row noGutters={true}>
              <Col xs="12" sm="12" md="4" lg="2">
                <Filters/>
              </Col>
              <Col xs="12" sm="12" sm="8" lg="10">
                <List data={this.state.data}/>
              </Col>
            </Row>
          </Container>
      </div>
    );
    return (
      <div>
        ...loading
      </div>
    )
  }
}

export default App;
