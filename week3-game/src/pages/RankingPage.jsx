import React, { useState } from "react";
import * as S from "./RankingPage.style";
import { getGameResults, resetGameResults } from "@utils/data";
import RankingTable from "@components/ranking/RankingTable";

const RankingPage = () => {
  const [gameResult, setGameResult] = useState(getGameResults);

  const handleReset = () => {
    resetGameResults();
    setGameResult(getGameResults()); // 초기화 후 업데이트
  };

  return (
    <>
      <S.RankingHeader>
        <S.Title>랭킹</S.Title>
        <S.Button onClick={handleReset}>초기화</S.Button>
      </S.RankingHeader>
      <RankingTable data={gameResult} />
    </>
  );
};

export default RankingPage;
