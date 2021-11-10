import React from 'react'
import { withAuthenticator, AmplifySignOut, AmplifySignInButton } from '@aws-amplify/ui-react'
import { Navbar, NavbarBrand, NavbarToggler, Table, Collapse, Nav, NavItem, NavLink, NavbarText, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

import { Route, Link, Redirect } from "wouter"


 function navBar() {



    return (
        <div>
            <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

        <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">

         <span>

           <i className="fas fa-bars" style={{color:'#fff'}}></i>
         </span>

         </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto ">
              <li className="nav-item">
     
              </li>
              <li className="nav-item">

              </li>
            </ul>
            <form className="d-flex">
              <AmplifySignOut />
            </form>
          </div>
        </div>
      </nav>


  
</>
            <Navbar
                color="dark"
                dark
                expand="md"
                fixed="top"
            >
                <NavbarBrand href="/Inicio" >
                    Band IOT Dates
                </NavbarBrand>
                <NavbarToggler  />
                <Collapse navbar>
                    <Nav navbar >
                        <NavItem>

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

export default navBar;