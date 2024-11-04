import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import Nav from "@components/Nav/Nav";
import GamePage from "@pages/GamePage";
import RankingPage from "@pages/RankingPage";
import { useState, useRef, useCallback } from "react";
import MainPage from "./pages/MainPage";

function App() {
  const [page, setPage] = useState("game");
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState("0.00");
  const timerWorker = useRef(null);

  // 페이지 변경
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // 레벨 변경
  const handleLevelChange = (newLevel) => {
    setLevel(parseInt(newLevel, 10));
  };

  // 타이머 시작 함수
  const startTimer = useCallback(() => {
    if (!timerWorker.current) {
      timerWorker.current = new Worker(new URL("./utils/worker.js", import.meta.url));
      timerWorker.current.postMessage("start");
      timerWorker.current.onmessage = (e) => {
        setTime((e.data / 1000).toFixed(2));
      };
    }
  }, []);

  // 타이머 정지 함수
  const stopTimer = useCallback(() => {
    if (timerWorker.current) {
      timerWorker.current.postMessage("stop");
      timerWorker.current.terminate();
      timerWorker.current = null;
    }
  }, []);

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
        {page === "game" ? (
          <GamePage level={level} startTimer={startTimer} stopTimer={stopTimer} />
        ) : (
          <RankingPage />
        )}
      </MainPage>
    </ThemeProvider>
  );
}

export default App;
