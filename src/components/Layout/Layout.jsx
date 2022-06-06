import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import logo from "./logo.svg";
// import "./App.css";
import { LogoImg, Header, Footer, MainContent } from "./Layout.styled.jsx";

export const Layout = () => {
  return (
    <>
      <Header>
        <div>
          <LogoImg src={logo} alt="logo" />
        </div>
        <AppBar />
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer>2022</Footer>
    </>
  );
};
