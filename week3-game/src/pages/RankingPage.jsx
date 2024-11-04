import React from "react";
import * as S from "./RankingPage.style";
import { getGameResults } from "@utils/data";
import RankingTable from "@components/ranking/RankingTable";

const RankingPage = () => {
  return (
    <>
      <S.Title>랭킹</S.Title>
      <RankingTable data={getGameResults()} />
    </>
  );
};

export default RankingPage;
