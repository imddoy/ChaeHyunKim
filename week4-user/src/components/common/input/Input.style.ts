import { Generators } from "@styles/generator";
import styled from "styled-components";

export const InputContainer = styled.section`
  ${Generators.flexGenerator("column", "start", "start")}
  gap: 1rem;
  width: 50rem;
  height: 8rem;
`;

export const InputWrapper = styled.article`
  position: relative;
  ${Generators.flexGenerator("row", "center", "center")}

  width: inherit;
  height: 5rem;
`;

export const Input = styled.input<{ $isDisabled?: boolean }>`
  width: inherit;
  height: inherit;
  padding: 0 1.6rem;

  color: ${({ theme }) => theme.colors.gray_0};

  background: ${({ theme }) => theme.colors.gray_800};
  border: 1px solid ${({ theme, $isDisabled }) => ($isDisabled ? theme.colors.red : "transparent")};
  border-radius: 6px;

  ${({ theme }) => theme.fonts["body2-normal-medi"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_600};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray_0};
    outline: none;
  }
`;

export const ToggleVisibilityIcon = styled.section`
  position: absolute;
  right: 1.6rem;

  width: 2.4rem;

  cursor: pointer;
`;

export const InputMessage = styled.div`
  height: 2rem;
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
`;
