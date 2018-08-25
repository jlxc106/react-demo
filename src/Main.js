import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import ListCategory from './ListCategory';
import CardListing from './CardListing';

class Main extends Component {
  renderCards() {
    const { data } = this.props;
    return data.map((dataObject, index) => {
      return (
        <div
          key={index}
          className="col-xs-12 col-sm-6 col-md-6 col-lg-3 contain-card"
        >
        <CardListing dataObject={dataObject}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="contain-main">
        <Col xs={12} sm={12} lg={9} className="main-left-column">
          {this.renderCards()}
        </Col>
        <Col xs={12} sm={12} lg={3} className="main-right-column">
          <ListCategory />
        </Col>
      </div>
    );
  }
}

export default Main;
