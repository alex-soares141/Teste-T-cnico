import { useState } from "react";
import { NavContainer, Search, SearchContainer, SearchInput, Title } from "./NavBar";
import SearchIcon from "../../assets/Icon/Default.png";

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
        <Search src={SearchIcon} alt="Ícone de pesquisa" />
      </SearchContainer>
    </NavContainer>
  );
};

export default NavBar;
