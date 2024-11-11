import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { IconEyeOff, IconEyeOn } from "@assets/svgs";
import * as S from "./Input.style";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isDisabled?: boolean;
  message?: string;
}

const Input = ({
  type = "input",
  value,
  onChange,
  placeholder,
  isDisabled,
  message,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(type !== "password"); // 비밀번호 입력값 보이기/숨기기

  // 비밀번호 입력값 보이기 여부 관리
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <S.InputContainer>
      <S.InputWrapper>
        <S.Input
          $isDisabled={isDisabled}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={isPasswordVisible ? "text" : "password"}
        />
        {type === "password" && (
          <S.ToggleVisibilityIcon
            onClick={handlePasswordVisibility}
            as={isPasswordVisible ? IconEyeOn : IconEyeOff}
          />
        )}
      </S.InputWrapper>
      {message && <S.InputMessage>{message}</S.InputMessage>}
    </S.InputContainer>
  );
};

export default Input;
