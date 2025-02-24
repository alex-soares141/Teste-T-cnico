import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/GlobalsStyles"; // Ajuste o caminho conforme necessário
import Navbar from "./Components/NavBar/NavBar"; // Ajuste o caminho conforme necessário

function App() {
  return (
    <ThemeProvider theme={GlobalStyles}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
