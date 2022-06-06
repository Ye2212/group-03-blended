import styled from "styled-components";

export const LogoImg = styled.img`
  height: 10vmin;
  pointer-events: none;

  // &:hover,
  // &:focus {
  //   animation: App-logo-spin infinite 20s linear;
  // }
`;
export const Header = styled.header`
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: start;
  color: white;
`;
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: #282c34;
  text-align: center;
  color: #61dafb;
`;
export const MainContent = styled.main`
  background: rgb(255, 255, 255);
  background: #b6b6b6;
  min-height: 84.3vh;
  font-family: Roboto;
  padding: 20px 0;
`;
