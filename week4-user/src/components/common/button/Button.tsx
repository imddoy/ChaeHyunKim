import React from "react";
import * as S from "./Button.style";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button = ({ onClick, disabled, text }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {text}
    </S.Button>
  );
};

export default Button;
