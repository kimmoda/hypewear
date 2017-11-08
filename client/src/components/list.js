import React, { Component } from 'react';
import ListItem from './list-item'
 class List extends Component {
   render () {
     return (
      <div className="event">
        <div className="event__date">
          <ListItem/>
        </div>
      </div>
     )
   }
 }

export default List;
