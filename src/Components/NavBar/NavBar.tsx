import { useState } from "react";
import {  NavbarContainer,NavbarList, SearchContainer, SearchInput, SearchIcon,Form,} from "./NavBar";
import searchIcon from "../../assets/Icon/Default.png";
  
const menuItems = ["Foto", "Nome", "Cargo", "Data de admissão", "Telefone"];

interface NavBarProps {
  onSearch: (query: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    onSearch(query); 
  };

  return (
    <header>
      <div>
        <Form>
          <h1>Funcionários</h1>
          <SearchContainer>
            <SearchIcon src={searchIcon} alt="Pesquisar" />
            <SearchInput
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </SearchContainer>
        </Form>
      </div>
      <NavbarContainer>
        <NavbarList>{menuItems.map((item, index) => <li key={index}>{item}</li>)}</NavbarList>
      </NavbarContainer>
    </header>
  );
};

export default NavBar;
