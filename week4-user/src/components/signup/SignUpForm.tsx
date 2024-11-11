import { useNavigate } from "react-router-dom";
import * as S from "./SignUpForm.style";
import { ReactNode } from "react";

export interface SignUpFormProps {
  title: string;
  children: ReactNode;
}

const SignUpForm = ({ title, children }: SignUpFormProps) => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <S.FormWrapper>
      <S.Title>{title}</S.Title>
      {children}
      <p>
        이미 회원이신가요? <S.SignupBtn onClick={goLogin}>로그인</S.SignupBtn>
      </p>
    </S.FormWrapper>
  );
};

export default SignUpForm;
