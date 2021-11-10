import { useEffect, useState } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarToggler, Table, Collapse, Nav, NavItem, NavLink, NavbarText, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import { Route, Link, Redirect } from "wouter"
import Inicio from './pages/Inicio';
import Reportes from './pages/Reportes';
import Navbar2 from './layouts/navBar'

Amplify.configure(aws_exports);


<Route path='/Inicio' component={Inicio} />

function App() {

  return (
    <div className="App">

      
      <Navbar2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Inicio/>
      <Route path='/Inicio' component={Inicio} />
      <Route path='/Reportes' component={Reportes} />

    </div>
  );
}


export default withAuthenticator(App);
