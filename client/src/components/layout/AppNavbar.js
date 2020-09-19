import React, { Fragment, useState } from 'react';
import { useSelector } from "react-redux";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import LoginModal from '../auth/LoginModal'
import RegisterModal from '../auth/RegisterModal'
import Logout from '../auth/Logout'

const AppNavbar = () => {
    //modal state
    const [isOpen, setIsOpen] = useState(false);

    //redux state
    const { isAuthenticated, user } = useSelector(state => state.auth)

    //handle modal toggle
    const toggle = () => setIsOpen(!isOpen);

    //navlinks menu
    const authLinks = (
        <Fragment>
            <NavItem>
                <span className="navbar-text mr-3">
                    <strong>
                        {user ? `Welcome ${user.name}` : ""}
                    </strong>
                </span>
            </NavItem>
            <NavItem>
                <Logout />
            </NavItem>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <NavItem>
                <RegisterModal />
            </NavItem>
            <NavItem>
                <LoginModal />
            </NavItem>
        </Fragment>
    )

    return (
        <div>
            <Navbar color="dark" dark expand="sm" >
                <Container>
                    <NavbarBrand href="/"> <i className="fa fa-pencil-square-o"></i> {""}Todo </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default AppNavbar;