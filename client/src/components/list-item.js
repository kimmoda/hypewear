import React, { Component } from 'react';
import { Col } from 'reactstrap';

 class ListItem extends Component {

   checkSale (sale) {
     if (sale) {
       return (
         <h5>
           <small className="product__price--sale">{this.props.item.priceLabel}</small>  {this.props.item.salePriceLabel}
         </h5>
       )
     }
     return <h5>{this.props.item.priceLabel}</h5>
   }

   addSaleRibbon (sale) {
     if (sale) {
       return (
        <div>hello</div>
       )
     }
   }

   render () {
     console.log(this.props.item)
     return (
       <Col xs="12" sm="12" sm="4" lg="2">
         <div className="product">
           <img className="product__img" src={this.props.item.image.sizes.Original.url}/>
           <div className="product__caption">
             <p className="product__name">{this.props.item.name}</p>
             {this.checkSale(this.props.item.salePriceLabel)}
           </div>
         </div>
       </Col>
     )
   }
 }

export default ListItem;
