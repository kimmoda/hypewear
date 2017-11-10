import './App.css';
import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

// image
import Logo from'./images/hypewear-logo.svg';

// components
import Search from './components/search';
import Filters from './components/filters';
import List from './components/list';
import { addSearch, addProducts } from './action.js'
import { connect } from "react-redux"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  getProducts = (search) => {
    //if (search) console.log(search)
    this.props.addSearch(search)
    fetch(`http://api.shopstyle.com/api/v2/products?pid=uid3204-40024198-72&fts=${search}&limit=50`, {
      method: 'get'
    }).then(response => {
      return response.json()
    }).then(
      data => {
      this.props.addProducts(data.products)
    })
  }

  componentDidMount() {
    this.getProducts("men")
  }


  render() {
    if (this.props.products.length) return (
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
                <List/>
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

const mapDispact = (dispatch) => ({
  addSearch: (inputValue) => dispatch(addSearch(inputValue)),
  addProducts: (products) => dispatch(addProducts(products)),
})

const mapStateProps = (state) => (
  {
  inputValue: state.inputValue,
  products: state.products,
})

 export default connect(mapStateProps, mapDispact)(App);
