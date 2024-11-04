import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/global";
import Nav from "@components/nav/Nav";
import GamePage from "@pages/GamePage";
import RankingPage from "@pages/RankingPage";
import { useState, useRef, useCallback } from "react";
import MainPage from "./pages/MainPage";
import Modal from "@components/modal/Modal";
import { saveGameResult } from "@utils/data";

function App() {
  const [page, setPage] = useState("game");
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState("0.00");
  const timerWorker = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [toggleResetGame, setToggleResetGame] = useState(false);

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
    setIsOpen(true);
  }, []);

  // 게임 저장 후 리셋
  const handleModalClose = () => {
    setIsOpen(false);
    saveGameResult(level, parseFloat(time)); // 게임 저장
    setTime("0.00"); // 시간 초기화
    setToggleResetGame((prev) => !prev); // 게임 리렌더링
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
        {page === "game" ? (
          <GamePage
            level={level}
            startTimer={startTimer}
            stopTimer={stopTimer}
            toggleResetGame={toggleResetGame}
          />
        ) : (
          <RankingPage />
        )}
      </MainPage>
      {isOpen && <Modal open={isOpen} time={time} onClose={handleModalClose} />}
    </ThemeProvider>
  );
}

export default App;
