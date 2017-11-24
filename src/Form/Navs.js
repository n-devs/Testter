import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Container, Col, Row, ListGroup } from 'reactstrap';

import '../css/style.css';



export default class Navs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Container>
        <Row >
          <Col className="button-navs button-navs-action">
            <NavLink href="#" active>รอ</NavLink>
            </Col>
            <Col className="button-navs button-navs-action">
            <NavLink href="#" active>รอ</NavLink>
            </Col>
            <Col className="button-navs button-navs-action">
            <NavLink href="#" active>รอ</NavLink>
            </Col>
        </Row>
      </Container>
    );
  }
}