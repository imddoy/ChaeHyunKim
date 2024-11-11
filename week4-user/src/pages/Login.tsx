import Button from "@components/common/button/Button";
import Input from "@components/common/input/Input";
import { useState } from "react";
import * as S from "./Login.style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const goSignup = () => {
    navigate("/signup");
  };

  return (
    <S.LoginWrapper>
      <Input value={id} type="text" placeholder="아이디" onChange={handleIdInput} />
      <Input
        value={password}
        type="password"
        placeholder="비밀번호"
        onChange={handlePasswordInput}
      />
      <Button text="로그인" />
      <S.SignupBtn onClick={goSignup}>회원가입</S.SignupBtn>
    </S.LoginWrapper>
  );
};

export default Login;
