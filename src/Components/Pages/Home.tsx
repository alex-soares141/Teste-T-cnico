import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../styles/GlobalsStyles.ts";
import Section from "../Section/Section.tsx";
import Header from "../Header/Header.tsx";
import NavBar from "../NavBar/NavBar.tsx"; 

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ThemeProvider theme={GlobalStyles}>
      <Header />
      <NavBar onSearch={setSearchQuery} />
      <Section searchQuery={searchQuery} />
    </ThemeProvider>
  );
}

export default Home;
