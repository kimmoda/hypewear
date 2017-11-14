import './App.css';
import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

// image
import Logo from './images/hypewear-logo.svg';

// components
import Search from './components/search';
import Filters from './components/filters';
import List from './components/list';
import { addSearch, addProducts, addFilterColor, addPricefilter } from './action.js'
import { connect } from "react-redux"

class App extends Component {

  getProducts = () => {
    const priceFilter = (this.props.filterPrice.length ? `&fl=p${this.props.filterPrice.join(":")}` : "")
    console.log("API PRICE", priceFilter)
    const colors = this.props.toggledFilterClass;
    const search = [this.props.inputValue];
    const constructedFilters = [...search, ...colors]
    fetch(`http://api.shopstyle.com/api/v2/products?pid=uid3204-40024198-72&fts=${constructedFilters.join('+')}${priceFilter}&limit=50`, {
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

  colorPropsChanged(prevProps) {
    return this.props.toggledFilterClass !== prevProps.toggledFilterClass
  }

  searchQueryChanged(prevProps) {
    return this.props.inputValue !== prevProps.inputValue
  }

  filterPriceQueryChanged(prevProps) {
    return this.props.filterPrice !== prevProps.filterPrice
  }

  componentDidUpdate (prevProps) {
    if(
      this.colorPropsChanged(prevProps)
      || this.searchQueryChanged(prevProps)
      || this.filterPriceQueryChanged(prevProps)
    ){
      this.getProducts();
    }
  }

  onSearch = (value) => {
    this.props.addSearch(value);
  }

  onSetPrice = (min, max) => {
    this.props.addPricefilter(min, max)
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
                  <Search onSearch={this.onSearch} />
                </Col>
              </Row>
          </Container>
        </header>
        <div className="bg"></div>
        <Container fluid={true}>
            <Row noGutters={true}>
              <Col className="background__light-grey" xs="12" sm="12" md="4" lg="2">
                <Filters onSetPrice={this.onSetPrice} getProducts={this.getProducts}/>
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

const mapDispatchToProps = (dispatch) => ({
  addSearch: (inputValue) => dispatch(addSearch(inputValue)),
  addProducts: (products) => dispatch(addProducts(products)),
  addPricefilter: (min, max) => dispatch(addPricefilter(min, max)),
})

const mapStateProps = (state) => ({
  inputValue: state.inputValue,
  products: state.products,
  colors: state.colors,
  filterColor: state.filterColor,
  toggledFilterClass: state.toggledFilterClass,
  filterPrice: state.filterPrice,
})

 export default connect(mapStateProps, mapDispatchToProps)(App);
