import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalsStyles";
import Section from "./Components/Section/Section.tsx";
import Header from "./Components/Header/Header.tsx";

function App() {
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Header />
      <Section searchQuery={""} />
    </ThemeProvider>
  );
}

export default App;
