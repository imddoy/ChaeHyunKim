import * as S from "./SignUpForm.style";
import { ReactNode } from "react";
import useNavigation from "./../../hooks/useNavigation";
export interface SignUpFormProps {
  title: string;
  children: ReactNode;
}

const SignUpForm = ({ title, children }: SignUpFormProps) => {
  const { goToLogin } = useNavigation();

  return (
    <S.FormWrapper>
      <S.Title>{title}</S.Title>
      {children}
      <p>
        이미 회원이신가요? <S.SignupBtn onClick={goToLogin}>로그인</S.SignupBtn>
      </p>
    </S.FormWrapper>
  );
};

export default SignUpForm;
