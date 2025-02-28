import { useState } from "react";
import { NavContainer, Title, SearchContainer, SearchInput } from "./NavBar";
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
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={handleSearchChange}
        />
      </SearchContainer>
    </NavContainer>
  );
};

export default NavBar;
