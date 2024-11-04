import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import Nav from "@components/Nav/Nav";
import GamePage from "@pages/GamePage";
import RankingPage from "@pages/RankingPage";
import { useState } from "react";
import MainPage from "./pages/MainPage";

function App() {
  const [page, setPage] = useState("game");
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0);

  // 페이지 변경
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // 레벨 변경
  const handleLevelChange = (newLevel) => {
    setLevel(parseInt(newLevel, 10));
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav
        page={page}
        level={level}
        onPageChange={handlePageChange}
        onLevelChange={handleLevelChange}
        time={time}
      />
      <GlobalStyle />
      <MainPage>
        {page === "game" ? <GamePage level={level} time={time} /> : <RankingPage />}
      </MainPage>
    </ThemeProvider>
  );
}

export default App;
