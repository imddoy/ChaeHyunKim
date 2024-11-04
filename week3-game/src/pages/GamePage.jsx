import React, { useState, useEffect, useMemo } from "react";
import * as S from "./GamePage.style";
import { shuffle } from "@utils/shuffle";

// 타이머가 돌아가도 렌더링되지 않도록 memo 사용
const GamePage = React.memo(({ level, startTimer, stopTimer, toggleResetGame }) => {
  // 다음 숫자
  const [nextNum, setNextNum] = useState(1);

  // 게임판 크기
  const gridSize = level + 2;
  const halfNum = gridSize * gridSize; // 3*3 4*4 5*5
  const maxNum = halfNum * 2;

  // 게임판 숫자 (value 값, 새로 들어온 값의 여부로 구성된 객체 배열)
  const [numbers, setNumbers] = useState([]);

  // level이 변경될 때마다 다음 숫자, 게임판 숫자 초기화
  useEffect(() => {
    setNextNum(1);
    setNumbers(
      shuffle(Array.from({ length: halfNum }, (_, i) => ({ value: i + 1, isNew: false })))
    );
  }, [level, toggleResetGame]);

  // 2회차 숫자 생성
  const remainingNumbers = useMemo(
    () =>
      shuffle(Array.from({ length: halfNum }, (_, i) => ({ value: halfNum + i + 1, isNew: true }))), // halfNum + 1부터 maxNum까지
    [level, toggleResetGame]
  );

  // 클릭 이벤트 핸들러
  const handleNumClick = (num, index) => {
    // 타이머 시작
    if (num.value === 1) {
      startTimer();
    }

    // 정답 숫자 클릭했을 때
    if (nextNum === num.value) {
      setNextNum((prev) => prev + 1); // 다음 숫자 안내

      const newNumbers = [...numbers]; // 새 배열에 numbers 복사
      newNumbers[index] = { value: null, isNew: false }; // 클릭한 숫자 없애서 박스 삭제
      setNumbers([...newNumbers]);

      // 새로운 숫자 클릭했을 때 그 자리에 남은 숫자 넣기
      setTimeout(() => {
        const nextNumber = remainingNumbers.shift() || { value: null, isNew: false };
        newNumbers[index] = nextNumber;
        setNumbers([...newNumbers]);
      }, 150);
    }

    // 타이머 종료
    if (nextNum === maxNum) {
      stopTimer();
    }
  };

  return (
    <>
      <S.NumInfo>{nextNum > maxNum ? "게임 종료" : `다음 숫자 : ${nextNum}`}</S.NumInfo>
      <S.NumBoard $gridSize={gridSize}>
        {numbers.map((num, index) => (
          <S.NumBox
            key={index}
            $isEmpty={num.value === null}
            $isNew={num.isNew}
            onClick={() => num && handleNumClick(num, index)}
          >
            {num.value}
          </S.NumBox>
        ))}
      </S.NumBoard>
    </>
  );
});

export default GamePage;
