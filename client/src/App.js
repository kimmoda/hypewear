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

  getProducts = (search) => {
    fetch(`http://api.shopstyle.com/api/v2/products?pid=uid3204-40024198-72&fts=${search}&limit=50`, {
      method: 'get'
    }).then(response => {
      return response.json()
    }).then(
      data => {
      console.log(data.products)
      this.setState({
        data: data
      })
    })
  }

  componentDidMount() {
    this.getProducts("men")
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
                  <Search getProducts={this.getProducts}/>
                </Col>
              </Row>
          </Container>
        </header>
        <div className="bg"></div>
        <Container fluid={true}>
            <Row noGutters={true}>
              <Col className="background__light-grey" xs="12" sm="12" md="4" lg="2">
                <Filters/>
              </Col>
              <Col className="background__light-grey" xs="12" sm="12" sm="8" lg="10">
                <List data={this.state.data}/>
              </Col>
            </Row>
          </Container>
      </div>
    );
    return (
      <div className="loader">
        <div className="loader__caption">
          <img className="logo__image" src={Logo}></img>
          <p className="loader__text">is loading...</p>
        </div>
      </div>
    )
  }
}

export default App;
