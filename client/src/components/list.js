import React, { Component } from 'react';
import ListItem from './list-item'

import { Row } from 'reactstrap';

 class List extends Component {
   constructor(props){
     super(props);
     this.state = {
       looped: false
     }
   }

   looper = (arr) => {
    return arr.map( el => {
       return (
          <ListItem item={el}/>
       )
     });
   }

   render () {
     return (
        <Row  noGutters={true}>
          {this.looper(this.props.data.products)}
        </Row>
     )

   }
 }

export default List;
