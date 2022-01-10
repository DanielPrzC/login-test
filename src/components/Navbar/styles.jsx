import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #000000;
  position: fixed;
  z-index: 10;
`;

export const NavLogo = styled.div`
  margin-left: 4rem;
`;

export const LogoLink = styled(Link)`
  color: #068b78;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  &:hover {
    font-weight: 800;
  }
`;

export const NavWrapper = styled.div`
  margin-right: 4rem;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    gap: 32px;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: semibold;
  color: #e4e4e4;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
`;
