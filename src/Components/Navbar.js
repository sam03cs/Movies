import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import "./Navbar.css";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/MainPage" activeStyle>
            Home
          </NavLink>
          <NavLink to="/SignUp" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/SignIn" activeStyle>
            Sign In
          </NavLink>
          <NavLink to="/Checkout" activeStyle>
            Checkout
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;