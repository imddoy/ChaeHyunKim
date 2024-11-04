import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import Nav from "@components/Nav/Nav";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("game");
  const [level, setLevel] = useState("1");
  const [time, setTime] = useState(0);

  // 페이지 변경
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // 레벨 변경
  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav
        page={page}
        level={level}
        onPageChange={handlePageChange}
        onLevelChange={handleLevelChange}
        time={time}
      />
    </ThemeProvider>
  );
}

export default App;
