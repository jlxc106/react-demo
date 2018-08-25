import React, { Component } from 'react';
import { DropdownButton, MenuItem, Glyphicon } from 'react-bootstrap';

class Search extends Component {
  render() {
    const {numOptions, sortOption, sortCallback} = this.props;
    return (
      <div className="contain-search">
        <div>
          <b>Newest Contractors in Santa Clara, Ca </b>
          <i className="search-results-span">
            ({numOptions} Results)
          </i>
        </div>
        <div className="contain-dropdown">
          <DropdownButton
            id="sortBy"
            title={
              <span>
                <Glyphicon glyph="glyphicon glyphicon-sort-by-attributes" />
                Sort By(
                {sortOption})
              </span>
            }
          >
            <MenuItem
              eventKey="1"
              active={sortOption === 'Top Rated'}
              onSelect={() => sortCallback('Top Rated')}
            >
              Top Rated
            </MenuItem>
            <MenuItem
              eventKey="2"
              active={sortOption === 'Most Popular'}
              onSelect={() => sortCallback('Most Popular')}
            >
              Most Popular
            </MenuItem>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Search;
