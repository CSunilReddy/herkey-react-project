import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

const Navigation = () => {
    {/*<nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    
    <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" >
                    Herkey
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    */}
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
        <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/">Herkey</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact">Contact</NavLink>
                </NavItem>              
            </Nav>            
          </Collapse>
        </Navbar>
      </div>
        
        </>
    );
};
export default Navigation;