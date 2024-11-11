import Button from "@components/common/button/Button";
import Input from "@components/common/input/Input";
import { useState } from "react";
import * as S from "./Login.style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const submitLogin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        username: id,
        password: password,
      });

      const { token } = response.data.result;
      localStorage.setItem("user", token);
      navigate("/mypage");
    } catch (error) {
      const { status, data } = error.response;
      const errorMessage =
        status === 400 && data.code === "01"
          ? "유효하지 않은 요청입니다."
          : status === 400 && data.code === "02"
          ? "올바르지 않은 로그인 정보입니다."
          : status === 403 && data.code === "01"
          ? "비밀번호가 틀렸습니다."
          : status === 404 && data.code === "00"
          ? "유효하지 않은 경로입니다."
          : "알 수 없는 오류가 발생했습니다.";

      alert(errorMessage);
    }
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
      <Button text="로그인" onClick={submitLogin} />
      <S.SignupBtn onClick={goSignup}>회원가입</S.SignupBtn>
    </S.LoginWrapper>
  );
};

export default Login;
