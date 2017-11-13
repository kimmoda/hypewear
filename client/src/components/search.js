import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from "react-redux"

 class Search extends Component {

   check = (value, key) => {
     if (key === 13) {
       this.props.getProducts(value, this.props.filterColor);
     }
   }

   onInputKeyUp = (e) => {
     this.check(e.target.value, e.keyCode);
   }

   render () {
     // console.log("asdasdasd", this.props);
     return (
      <div className="event">
        <div className="event__date">
          <Input
            type="text"
            name="email"
            id="exampleEmail"
            ref="search"
            placeholder="search..."
            onKeyUp={this.onInputKeyUp}
          />
        </div>
      </div>
     )
   }
 }

const mapStateProps = (state) => (
  {
  inputValue: state.inputValue,
  products: state.products,
  colors: state.colors,
  filterColor: state.filterColor,
  toggledFilterClass: state.toggledFilterClass,
})

 export default connect(mapStateProps, null)(Search);
