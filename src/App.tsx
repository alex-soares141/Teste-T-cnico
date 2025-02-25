import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalsStyles"; // Ajuste o caminho conforme necessário
import NavBar from "./Components/NavBar/NavBar";
import Section from "./Components/Section/Section";
import Header from "./Components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Header/>
      <NavBar />
      <Section/>
    </ThemeProvider>
  );
}

export default App;
