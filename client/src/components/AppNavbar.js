import React, { useState } from 'react';
import { Container } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="sm" >
                <Container>
                    <NavbarBrand href="/">Todo</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/foxching">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>

            </Navbar>
        </div>
    );
}

export default AppNavbar;