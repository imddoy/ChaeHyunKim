import React from "react";
import * as S from "./Nav.style";

const Nav = ({ page, level, onPageChange, onLevelChange, time }) => {
  return (
    <S.NavContainer>
      <S.NavigateWrapper>
        <S.Logo>1 to 50</S.Logo>
        <S.CategoryWrapper>
          <S.Category $isSelected={page === "game"} onClick={() => onPageChange("game")}>
            게임
          </S.Category>
          <S.Category $isSelected={page === "rank"} onClick={() => onPageChange("rank")}>
            랭킹
          </S.Category>
        </S.CategoryWrapper>
      </S.NavigateWrapper>
      {page === "game" && (
        <S.GameOptionWrapper>
          <S.SelectLevel value={level} onChange={(e) => onLevelChange(e.target.value)}>
            <option value="1">레벨 1</option>
            <option value="2">레벨 2</option>
            <option value="3">레벨 3</option>
          </S.SelectLevel>
          <S.Timer>{time}</S.Timer>
        </S.GameOptionWrapper>
      )}
    </S.NavContainer>
  );
};

export default Nav;
