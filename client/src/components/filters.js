import React, { Component } from 'react';
import { connect } from "react-redux"

 class Filters extends Component {

   getColors = () => {
     fetch(`http://api.shopstyle.com/api/v2/colors?pid=uid3204-40024198-72`, {
       method: 'get'
     }).then(response => {
       return response.json()
     }).then(
       data => {
       data.colors.map((color)=> {
         console.log(color)
       })
     })
   }

   componentDidMount() {
     this.getColors()
   }


   render () {
     return (
      <div className="filter__wrap">
        <div className="filter">
          <h3 className="filter__title"> Colors</h3>
          <div className="filter__wrap-color">
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
            <div className="filter__color"></div>
          </div>
        </div>
        <div className="filter">
          <h3 className="filter__title"> Price range</h3>
        </div>
      </div>
     )
   }
 }

 // const mapDispact = (dispatch) => ({
 //   addSearch: (inputValue) => dispatch(addSearch(inputValue)),
 //   addProducts: (products) => dispatch(addProducts(products)),
 // })
 //
 const mapStateProps = (state) => (
   {
   inputValue: state.inputValue,
   products: state.products,
 })

  export default connect(mapStateProps, null)(Filters);
