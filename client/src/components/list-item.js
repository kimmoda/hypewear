import React, { Component } from 'react';
import { Col } from 'reactstrap';

 class ListItem extends Component {
   render () {
     console.log(this.props.item.image.sizes)
     return (
       <Col xs="12" sm="12" sm="4" lg="2">
         <div className="product">
           <div className="product__wrap-img">
             <img className="product__wrap-img" src={this.props.item.image.sizes.Original.url}/>
           </div>
           <div className="product__caption">
             <img src={this.props.item.image.sizes.Original.url}/>
           </div>
         </div>
       </Col>
     )
   }
 }

export default ListItem;
