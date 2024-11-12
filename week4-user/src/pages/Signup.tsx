import SignUpForm from "@components/signup/SignUpForm";
import * as S from "./Signup.style";
import Input from "@components/common/input/Input";
import { useEffect, useState } from "react";
import Button from "@components/common/button/Button";
import { validateSignupInput } from "@utils/handleInput";
import useNavigation from "./../hooks/useNavigation";
import { signUp } from "@apis/userApi";

const Signup = () => {
  const [step, setStep] = useState(1); // 1~3
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [hobby, setHobby] = useState("");
  const [buttonText, setButtonText] = useState("다음");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const { goToLogin } = useNavigation();

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
      setTouched((prevTouched) => ({ ...prevTouched, [field]: true }));
    };

  const handleValidation = () => {
    const fields = step === 1 ? { username } : step === 2 ? { password, checkPassword } : { hobby };
    const { isValid, errors: validationErrors } = validateSignupInput(step, fields, touched);
    setErrors(validationErrors);
    return isValid;
  };

  useEffect(() => {
    handleValidation();
  }, [step, username, password, checkPassword, hobby]);

  const nextStep = () => {
    if (!handleValidation()) return;
    if (step === 2) {
      setButtonText("제출");
    }
    setStep((prev) => prev + 1);
  };

  const submitSignup = async () => {
    if (!handleValidation()) return;
    try {
      const no = await signUp(username, password, hobby);
      alert(`${no}번째 회원님, 환영합니다!`);
      goToLogin();
    } catch (error) {
      const { status, data } = error.response;
      const errorMessage =
        status === 400 && data.code === "00"
          ? "유효하지 않은 요청입니다."
          : status === 400 && data.code === "01"
          ? "유효하지 않은 회원 정보입니다."
          : status === 404
          ? "유효하지 않은 경로입니다."
          : status === 409 && data.code === "00"
          ? "이미 존재하는 이름입니다."
          : "알 수 없는 오류가 발생했습니다.";

      alert(errorMessage);
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
            onChange={handleChange(setUsername, "username")}
            message={errors.username}
            isDisabled={!!errors.username}
          />
          <Button text={buttonText} onClick={nextStep} disabled={!username || !!errors.username} />
        </SignUpForm>
      )}
      {step === 2 && (
        <SignUpForm title="비밀번호">
          <Input
            value={password}
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handleChange(setPassword, "password")}
            message={errors.password}
            isDisabled={!!errors.password}
          />
          <Input
            value={checkPassword}
            type="password"
            placeholder="비밀번호 확인을 입력하세요"
            onChange={handleChange(setCheckPassword, "checkPassword")}
            message={errors.checkPassword}
            isDisabled={!!errors.password}
          />
          <Button
            text={buttonText}
            onClick={nextStep}
            disabled={!password || !checkPassword || !!errors.password || !!errors.checkPassword}
          />
        </SignUpForm>
      )}
      {step === 3 && (
        <SignUpForm title="취미">
          <Input
            value={hobby}
            type="text"
            placeholder="취미를 입력하세요"
            onChange={handleChange(setHobby, "hobby")}
            message={errors.hobby}
            isDisabled={!!errors.hobby}
          />
          <Button text={buttonText} onClick={submitSignup} disabled={!hobby || !!errors.hobby} />
        </SignUpForm>
      )}
    </S.SignupWrapper>
  );
};

export default Signup;
