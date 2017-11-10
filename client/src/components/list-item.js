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
       console.log(sale)
       return (
        <div className="product__ribbon">
          <span className="product__ribbon-text">
            sale {this.props.item.discount}%
          </span>
        </div>
       )
     }
     return
   }

   render () {
     return (
       <Col xs="12" sm="12" sm="4" lg="2">
         <div className="product">
           {this.addSaleRibbon(this.props.item.discount)}
           <div className="product__wrap-img">
             <img className="product__img" src={this.props.item.image.sizes.Original.url}/>
           </div>
           <div className="product__caption">
             <p className="product__name">{this.props.item.name}</p>
             {this.checkSale(this.props.item.salePriceLabel)}
             <div className="product__actions">
               <a className="product__button" target="_blank" href={this.props.item.clickUrl}>Add to your list</a>
               <a className="product__button product__button--buy" target="_blank" href={this.props.item.clickUrl}>Buy now</a>
             </div>
           </div>
         </div>
       </Col>
     )
   }
 }

export default ListItem;
