import React, { Component } from 'react';
import { connect } from "react-redux";
import { Input, Container, Row, Col} from 'reactstrap';

import { addColors, toggleClassColor, ClearFilterColors } from '../action.js'

 class Filters extends Component {

   getColors = () => {
     fetch(`http://api.shopstyle.com/api/v2/colors?pid=uid3204-40024198-72`, {
       method: 'get'
     }).then(response => {
       return response.json()
     }).then(
       data => {
        this.props.addColors(data.colors)
     })
   }

   componentDidMount() {
     this.getColors()
   }

   onClickFilterColor = (color) => {
     let colorQuery = `+${color}`;
     this.props.getProducts(this.props.inputValue, colorQuery)
     this.props.toggleClassColor(color)
   }

   setColors = (colors) => {
    return colors.map( color => {
      let colorClass = `filter__color filter__color--${color.name}`;
      if (this.props.toggledFilterClass.indexOf(color.name) >= 0) {
        colorClass = `filter__color filter__color--active filter__color--${color.name}`
      }
       return (
          <div key={color.id} className={colorClass} onClick={() => {this.onClickFilterColor(color.name)}}></div>
       )
     });
   }

   clearColors = () => {
     this.props.ClearFilterColors()
     this.props.getProducts(this.props.inputValue, "")
   }

   render () {
     console.log(this.handleOnChange)
     return (
      <div className="filter__wrap">
        <div className="filter">
          <h3 className="filter__title"> Colors</h3>
          <div className="filter__wrap-color">
            {this.setColors(this.props.colors)}
          </div>
          <Container>
            <Row>
              <Col>
                <div className="filter__button" onClick={this.clearColors}>Clear filter</div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="filter">
          <h3 className="filter__title"> Price range</h3>
          <div className="filter__wrap-slider">
            <Container>
                <Row>
                  <Col xs="6" sm="6" md="6" lg="6">
                    <label>Min</label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option value="21">0</option>
                      <option value="22">10</option>
                      <option value="23">25</option>
                      <option value="24">50</option>
                      <option value="25">75</option>
                      <option value="26">100</option>
                      <option value="27">125</option>
                      <option value="28">150</option>
                      <option value="29">200</option>
                      <option value="30">250</option>
                      <option value="31">300</option>
                      <option value="32">350</option>
                      <option value="33">400</option>
                      <option value="34">500</option>
                      <option value="35">600</option>
                      <option value="36">700</option>
                      <option value="37">800</option>
                      <option value="38">900</option>
                      <option value="39">1000</option>
                      <option value="40">1250</option>
                      <option value="41">1500</option>
                      <option value="42">1750</option>
                      <option value="43">2000</option>
                      <option value="44">2250</option>
                      <option value="45">2500</option>
                      <option value="46">3000</option>
                      <option value="47">3500</option>
                      <option value="48">4000</option>
                      <option value="49">4500</option>
                    </Input>
                  </Col>
                  <Col xs="6" sm="6" sm="6" lg="6">
                    <label>Max</label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option value="49">+5000</option>
                      <option value="48">4500</option>
                      <option value="47">4000</option>
                      <option value="46">3500</option>
                      <option value="45">3000</option>
                      <option value="44">2500</option>
                      <option value="43">2250</option>
                      <option value="42">2000</option>
                      <option value="41">1750</option>
                      <option value="40">1500</option>
                      <option value="39">1250</option>
                      <option value="38">1000</option>
                      <option value="37">900</option>
                      <option value="36">800</option>
                      <option value="35">700</option>
                      <option value="34">600</option>
                      <option value="33">500</option>
                      <option value="32">400</option>
                      <option value="31">350</option>
                      <option value="30">300</option>
                      <option value="29">250</option>
                      <option value="28">200</option>
                      <option value="27">150</option>
                      <option value="26">125</option>
                      <option value="25">100</option>
                      <option value="24">75</option>
                      <option value="23">50</option>
                      <option value="22">25</option>
                      <option value="21">10</option>
                    </Input>
                  </Col>
                </Row>
                <div className="filter__wrap-button">
                  <Row>
                    <Col xs="6" sm="6" md="6" lg="6">
                      <div className="filter__button filter__button--inverse" onClick={()=> {console.log("Set")}}>Set</div>
                    </Col>
                    <Col xs="6" sm="6" sm="6" lg="6">
                      <div className="filter__button" onClick={()=> {console.log("Clear")}}>Clear</div>
                    </Col>
                  </Row>
                </div>
              </Container>
          </div>
        </div>

      </div>
     )
   }
 }

 const mapDispact = (dispatch) => ({
   addColors: (colors) => dispatch(addColors(colors)),
   toggleClassColor: (color) => dispatch(toggleClassColor(color)),
   ClearFilterColors: () => dispatch(ClearFilterColors()),
 })

 const mapStateProps = (state) => (
   {
   inputValue: state.inputValue,
   products: state.products,
   colors: state.colors,
   filterColor: state.filterColor,
   toggledFilterClass: state.toggledFilterClass,
 })

  export default connect(mapStateProps, mapDispact)(Filters);
