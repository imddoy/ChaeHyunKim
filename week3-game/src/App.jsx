import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import "@styles/theme.css";
import GlobalStyle from "@styles/global";
import Nav from "@components/Nav/Nav";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
      </ThemeProvider>
    </>
  );
}

export default App;
