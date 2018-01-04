import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Container } from 'reactstrap';

export default class Nav_bar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (

            <Navbar color="primary" light expand="md">
                <Container>
                    <NavbarBrand href="/" className="text-white" >LOGO</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* รอ */}
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            {/* รอ */}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}
