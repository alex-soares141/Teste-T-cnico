import React from "react";
import { NavbarContainer, NavbarList } from "./navBar";

const menuItems = ["Foto", "Nome", "Cargo", "Data de admissão", "Telefone"];

const NavBar = () => {
  const menuList = menuItems.map((item, index) => <li key={index}>{item}</li>);

  return (
    <NavbarContainer>
      <NavbarList>{menuList}</NavbarList>
    </NavbarContainer>
  );
};

export default NavBar;
