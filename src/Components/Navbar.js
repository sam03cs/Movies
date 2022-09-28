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
            Login
          </NavLink>
          <NavLink to="/Checkout" activeStyle>
            Checkout
          </NavLink>
          <NavLink to="/BookTickets" activeStyle>
            Book
          </NavLink>
          <NavLink to="/Profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/EditPage" activeStyle>
            Edit profile
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;