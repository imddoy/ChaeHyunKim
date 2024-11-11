import SignUpForm from "@components/signup/SignUpForm";
import * as S from "./Signup.style";
import Input from "@components/common/input/Input";
import { useState } from "react";
import Button from "@components/common/button/Button";
import axios from "axios";

const Signup = () => {
  const [step, setStep] = useState(1); // 1~3
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const [buttonText, setButtonText] = useState("다음");

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCheckPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };

  const handleHobbyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHobby(e.target.value);
  };

  const nextStep = () => {
    if (step === 2) {
      setButtonText("제출");
    }
    setStep((prev) => prev + 1);
  };

  const submitSignup = async () => {
    try {
      const request = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user`, {
        username: username,
        password: password,
        hobby: hobby,
      });
      console.log(request);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.SignupWrapper>
      {step === 1 && (
        <SignUpForm title="이름">
          <Input
            value={username}
            type="text"
            placeholder="이름을 입력하세요"
            onChange={handleNameInput}
          />
          <Button text={buttonText} onClick={nextStep} />
        </SignUpForm>
      )}
      {step === 2 && (
        <SignUpForm title="비밀번호">
          <Input
            value={password}
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handlePasswordInput}
          />
          <Input
            value={checkPassword}
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handleCheckPasswordInput}
          />
          <Button text={buttonText} onClick={nextStep} />
        </SignUpForm>
      )}
      {step === 3 && (
        <SignUpForm title="취미">
          <Input
            value={hobby}
            type="text"
            placeholder="취미를 입력하세요"
            onChange={handleHobbyInput}
          />
          <Button text={buttonText} onClick={submitSignup} />
        </SignUpForm>
      )}
    </S.SignupWrapper>
  );
};

export default Signup;
