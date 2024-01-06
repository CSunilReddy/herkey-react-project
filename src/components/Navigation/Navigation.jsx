import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Nav, NavItem,NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';

const Navigation = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
        <div>
        <Navbar className='navBarCustomClass' color="faded" light expand="md">
          <NavbarBrand href="/">Herkey</NavbarBrand>
          <NavbarText className='cartWrapper'>
            <NavLink tag ={ReactLink} to="/cart" class="nav-a nav-a-2 nav-progressive-attribute" id="nav-cart">
              <div id="nav-cart-count-container">
                <span id="nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-1 nav-progressive-attribute nav-progressive-content">5</span>
                <span class="nav-cart-icon nav-sprite"></span>
              </div>              
            </NavLink>
          </NavbarText>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen}  navbar>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink tag={ReactLink} to="/" >Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ReactLink} to="/about" >About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ReactLink} to="/contact">Contact</NavLink>
                </NavItem>              
            </Nav>            
          </Collapse>
          
        </Navbar>
      </div>
        
        </>
    );
};
export default Navigation;