import { useState } from "react";
import * as S from "./MyPageHeader.style";
import { useNavigate } from "react-router-dom";

const MyPageHeader = () => {
  const [tab, setTab] = useState("hobby");
  const navigate = useNavigate();

  const handleTab = (tab) => {
    setTab(tab);
    navigate(`/mypage/${tab}`);
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <S.MyPageHeaderContainer>
      <S.NavTab>
        <S.Title>마이페이지</S.Title>
        <S.TabBtnWrapper>
          <S.TabBtn $isActive={tab === "hobby"} onClick={() => handleTab("hobby")}>
            취미
          </S.TabBtn>
          <S.TabBtn $isActive={tab === "info"} onClick={() => handleTab("info")}>
            내 정보
          </S.TabBtn>
        </S.TabBtnWrapper>
      </S.NavTab>
      <S.LogoutBtn onClick={logout}>로그아웃</S.LogoutBtn>
    </S.MyPageHeaderContainer>
  );
};

export default MyPageHeader;
