import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const NavList = styled.ul`
  display: flex;
  list-style: none;
`;
export const NavItem = styled.li`
  margin-right: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: #61dafb;
  }
`;
