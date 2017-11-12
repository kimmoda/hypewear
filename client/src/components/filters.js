import React, { Component } from 'react';
import { connect } from "react-redux"
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
     return (
      <div className="filter__wrap">
        <div className="filter">
          <h3 className="filter__title"> Colors</h3>
          <div className="filter__wrap-color">
            {this.setColors(this.props.colors)}
          </div>
        <div className="filter__button" onClick={this.clearColors}>Clear filter</div>
        </div>
        <div className="filter">
          <h3 className="filter__title"> Price range</h3>
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
