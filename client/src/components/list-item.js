import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : '999',
  }
};


 class ListItem extends Component {

   constructor() {
     super();

     this.state = {
       modalIsOpen: false
     };

     this.openModal = this.openModal.bind(this);
     this.afterOpenModal = this.afterOpenModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
   }

   openModal() {
     this.setState({modalIsOpen: true});
   }

   afterOpenModal() {
     // references are now sync'd and can be accessed.
     this.subtitle.style.color = '#f00';
   }

   closeModal() {
     this.setState({modalIsOpen: false});
   }

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
           <div onClick={this.openModal} className="product__wrap-img">
             <img className="product__img" src={this.props.item.image.sizes.Original.url}/>
           </div>
           <div className="product__caption">
             <p className="product__name">{this.props.item.name}</p>
             {this.checkSale(this.props.item.salePriceLabel)}
             <div className="product__actions">
               <a className="product__button" target="_blank" href={this.props.item.clickUrl}>Add to list</a>
               <a className="product__button product__button--buy" target="_blank" href={this.props.item.clickUrl}>Buy now</a>
             </div>
           </div>
         </div>
         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           style={customStyles}
           contentLabel="Example Modal"
         >

           <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.item.name}</h2>
           <button onClick={this.closeModal}>close</button>
         </Modal>

       </Col>
     )
   }
 }

export default ListItem;
