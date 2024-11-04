import React, { useState, useMemo } from "react";
import * as S from "./GamePage.style";
import { shuffle } from "./../utils/shuffle";

const GamePage = ({ level, startTimer, stopTimer }) => {
  const [nextNum, setNextNum] = useState(1);
  const gridSize = level + 2;
  const halfNum = gridSize * gridSize;
  const maxNum = halfNum * 2;
  const allNumbers = Array.from({ length: maxNum }, (_, i) => i + 1);

  // 전체 배열 생성
  const initialNumbers = useMemo(() => {
    return shuffle(allNumbers.slice(0, halfNum));
  }, [maxNum, halfNum]);

  // 클릭 이벤트 핸들러
  const handleNumClick = (num) => {
    console.log(num);
    // 1을 클릭했을 때 타이머 시작
    if (num === 1) {
      startTimer();
    }
    if (nextNum === num) {
      setNextNum((prev) => prev + 1);
    }
    // 마지막 숫자 클릭했을 때 타이머 종료
    if (num === halfNum) {
      stopTimer();
    }
  };

  return (
    <>
      <S.NumInfo>다음 숫자: {nextNum}</S.NumInfo>
      <S.NumBoard $gridSize={gridSize}>
        {initialNumbers.map((num, index) => (
          <S.NumBox key={index} onClick={() => handleNumClick(num)}>
            {num}
          </S.NumBox>
        ))}
      </S.NumBoard>
    </>
  );
};

export default GamePage;
