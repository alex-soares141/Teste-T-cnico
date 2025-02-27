import { useState } from "react"; // Importa o useState
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalsStyles";
import Section from "./Components/Section/Section.tsx";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar.tsx";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); 

  return (
    <ThemeProvider theme={GlobalStyles}>
      <Header />
      <NavBar onSearch={setSearchQuery} /> 
      <Section searchQuery={searchQuery} /> 
    </ThemeProvider>
  );
}

export default App;
