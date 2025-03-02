import { useState } from "react";

import { ThemeProvider } from "styled-components";
import theme from "../../../styles/Theme";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../../Components/Header/Header.tsx";
import NavBar from "../../Components/NavBar/NavBar.tsx";
import Section from "../../Components/Section/Section.tsx";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <NavBar onSearch={setSearchQuery} />
      <Section searchQuery={searchQuery} />
    </ThemeProvider>
  );
}

export default Home;
