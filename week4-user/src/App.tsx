import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

function App() {
  return (
    <>
      {" "}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
