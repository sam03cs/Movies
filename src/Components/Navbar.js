import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
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
            Login
          </NavLink>
          <NavLink to="/Checkout" activeStyle>
            Checkout
          </NavLink>
          <NavLink to="/RegistrationConfirm" activeStyle>
            Registration Confirmation
          </NavLink>
          <NavLink to="/BookTickets" activeStyle>
            Book
          </NavLink>
          <NavLink to="/AdminView" activeStyle>
            Admin
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;