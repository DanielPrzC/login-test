import React from "react";
import { Nav, NavLogo, LogoLink, NavWrapper, NavLink } from "./styles";
import Button from "../Button";

const Navbar = () => {
  const isLogged = window.localStorage.getItem("isLogged");
  const logOut = () => {
    localStorage.clear();
    window.location = "/";
  };
  return (
    <Nav>
      <NavLogo>
        <LogoLink to="/">TEST</LogoLink>
      </NavLogo>
      <NavWrapper>
        <ul>
          {!isLogged && (
            <li>
              <NavLink to="/login">Log In</NavLink>
            </li>
          )}
          {isLogged && (
            <li>
              {" "}
              <Button type="button" onClick={logOut}>
                Log Out
              </Button>
            </li>
          )}
        </ul>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
