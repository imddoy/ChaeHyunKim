import { useLocation } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const { pathname } = useLocation();
  return <S.HeaderContainer>{pathname === "/signup" ? "회원가입" : "로그인"}</S.HeaderContainer>;
};

export default Header;
