import React, { Component } from 'react';
import ListItem from './list-item'

import { Row } from 'reactstrap';
import { connect } from "react-redux"

 class List extends Component {

   getProduct = (arr) => {
    return arr.map( el => {
       return (
          <ListItem item={el}/>
       )
     });
   }

   render () {
     if(this.props.products){
     console.log(this.props.inputValue)
     return (
        <Row noGutters={true}>
          {this.getProduct(this.props.products)}
        </Row>
       )
     }
     else {
       return <div>maison margela</div>
     }
   }
 }

 const mapStateProps = (state) => ({
   inputValue: state.inputValue,
   products: state.products,
 })


  export default connect(mapStateProps, null)(List);
