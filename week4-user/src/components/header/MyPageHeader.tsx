import { useState } from "react";
import * as S from "./MyPageHeader.style";
import useNavigation from "./../../hooks/useNavigation";
import { useLocation } from "react-router-dom";

const MyPageHeader = () => {
  const location = useLocation();
  const initialTab = location.pathname.endsWith("/info") ? "info" : "hobby";
  const [tab, setTab] = useState(initialTab);
  const { goToMyPageTab, goToLogin } = useNavigation();

  const handleTab = (tab) => {
    setTab(tab);
    goToMyPageTab(tab);
  };

  const logout = () => {
    localStorage.removeItem("user");
    goToLogin();
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
