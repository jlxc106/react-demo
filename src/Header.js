import React, { Component } from 'react';
import { ButtonGroup, Button, Glyphicon, Navbar } from 'react-bootstrap';

import logo from './logo-small.png';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="top-header-div contain-logo">
          <img className="header-logo" src={logo} alt="logo" />
        </div>
        <Navbar className="bottom-header-div" collapseOnSelect inverse>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ButtonGroup className="contain-navbar-buttons">
              <Button bsStyle="link" bsSize="lg" className="navbar-button">
                <Glyphicon glyph="glyphicon glyphicon-th" />
                Locations
              </Button>
              <Button bsStyle="link" bsSize="lg" className="navbar-button">
                <Glyphicon glyph="glyphicon glyphicon-globe" />
                Categories
              </Button>
            </ButtonGroup>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
