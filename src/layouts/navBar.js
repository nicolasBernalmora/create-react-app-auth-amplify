import React from 'react'
import { withAuthenticator, AmplifySignOut, AmplifySignInButton } from '@aws-amplify/ui-react'
import {Navbar,NavbarBrand,NavbarToggler,Table,Collapse, Nav,NavItem,NavLink,NavbarText,DropdownItem,DropdownMenu,DropdownToggle,UncontrolledDropdown} from 'reactstrap';

import { Route, Link, Redirect } from "wouter"

export default function navBar() {
    return (
        <div>
                    <Navbar
    color="dark"
    dark
    expand="md"
    fixed="top"
  >
    <NavbarBrand href="/Inicio">
        RFtek Manilla IOT
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav navbar >
        <NavItem>
          <NavLink Link href="/Reportes">
            Reportes
          </NavLink>
        </NavItem>
 
    
      </Nav>
      <NavbarText >
      <AmplifySignOut />
      </NavbarText>
    </Collapse>
  </Navbar>
        </div>
    )
}
