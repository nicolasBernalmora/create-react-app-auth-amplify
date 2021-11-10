import React from 'react'
import { withAuthenticator, AmplifySignOut, AmplifySignInButton } from '@aws-amplify/ui-react'
import { Navbar, NavbarBrand, NavbarToggler, Table, Collapse, Nav, NavItem, NavLink, NavbarText, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

import { Route, Link, Redirect } from "wouter"



export default function navBar() {

    var apiURL = "https://p0ow7ebyd1.execute-api.us-east-1.amazonaws.com/dev"


    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed="top"
            >
                <NavbarBrand href="/Inicio" >
                Band IoT Dates
                </NavbarBrand>
                <NavbarToggler  />
                <Collapse navbar>
                    <Nav navbar >



                    </Nav>
                    <NavbarText >
                        <AmplifySignOut />
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
