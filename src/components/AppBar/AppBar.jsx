import { NavList, NavItem, StyledNavLink } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <>
      <nav>
        <NavList>
          <NavItem>
            <StyledNavLink to="/">HOME</StyledNavLink>
          </NavItem>
          <li>
            <StyledNavLink to="add">ADD CONTACT</StyledNavLink>
          </li>
        </NavList>
      </nav>
    </>
  );
};
