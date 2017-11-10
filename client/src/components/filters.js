import React, { Component } from 'react';

 class Filters extends Component {
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

export default Filters;
