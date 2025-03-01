import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalsStyles.ts";
import Section from "./Components/Section/Section.tsx";
import Header from "./Components/Header/Header.tsx";
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
