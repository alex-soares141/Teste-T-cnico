import { useState } from "react";
import { NavContainer, SearchInput, Title } from "./NavBar";
import React from "react";

interface NavBarProps {
  onSearch: (query: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    onSearch(query); 
  };

  return (
    <NavContainer>
      <Title>Funcionários</Title>
      <SearchInput
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={handleSearchChange}
      />
    </NavContainer>
  );
};

export default NavBar;
