import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import { Button, Col } from 'react-bootstrap';

class CardListing extends Component {
    
  renderRating(rating) {
    rating = rating > 5 ? 5 : rating;
    let ratingArray = [];
    while (rating > 0) {
      if (rating >= 1) {
        ratingArray.push(1);
      }
      if (rating < 1) {
        ratingArray.push(0.5);
        break;
      }
      rating = rating - 1;
    }
    return (
      <div className="col-xs-6 col-lg-6 contain-stars">
        {ratingArray.map((ratingItem, index) => {
          if (ratingItem === 1) {
            return (
              <Col key={index} xs={2} sm={2} md={2} lg={2} className="col-star">
                <i className="far fa-star fa-gold-star" aria-hidden="true" />
              </Col>
            );
          }
          return (
            <Col key={index} xs={2} sm={2} md={2} lg={2} className="col-star">
              <i className="fa fa-star-half fa-gold-star" aria-hidden="true" />
            </Col>
          );
        })}
      </div>
    );
  }

  render() {
    const { dataObject } = this.props;
    return (
      <Card
        header={<CardTitle image={dataObject.profile_picture} />}
        className="small contain-card-text"
      >
        <div className="card-text">
          <p>
            {' '}
            <b className="card-title">{dataObject.title}</b>
          </p>
          <p>
            <span className="silver-span">{dataObject.name}</span>
          </p>
          <p>
            {dataObject.address.city}, {dataObject.address.state}
          </p>
        </div>
        <div className="card-footer">
          {this.renderRating(dataObject.averageRating)}
          <div className="col-xs-6 col-lg-6 contain-btn-view-profile">
            <Button className="btn-primary btn-view-profile">
              View Profile
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default CardListing;
