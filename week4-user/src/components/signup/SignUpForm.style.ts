import { Generators } from "@styles/generator";
import styled from "styled-components";

export const FormWrapper = styled.div`
  ${Generators.flexGenerator("column", "start", "start")}
  gap: 1rem;

  & p {
    width: 100%;

    color: ${({ theme }) => theme.colors.gray_0};
    ${({ theme }) => theme.fonts["body2-normal-medi"]};
    text-align: center;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  height: 4rem;
  color: ${({ theme }) => theme.colors.gray_0};
  ${({ theme }) => theme.fonts["heading2"]};
`;

export const SignupBtn = styled.span`
  color: ${({ theme }) => theme.colors.blue_400};
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
  text-decoration: underline;
  margin: 0.5rem;
`;
