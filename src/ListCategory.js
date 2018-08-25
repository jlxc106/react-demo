import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class ListCategory extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#">Home</ListGroupItem>
        <ListGroupItem href="#">Wellness</ListGroupItem>
        <ListGroupItem href="#">Consulting</ListGroupItem>
        <ListGroupItem href="#">Automotive</ListGroupItem>
        <ListGroupItem href="#">Events</ListGroupItem>
        <ListGroupItem href="#">Tech</ListGroupItem>
        <ListGroupItem href="#">Pets</ListGroupItem>
        <ListGroupItem href="#">Education</ListGroupItem>
      </ListGroup>
    );
  }
}

export default ListCategory;
