import styled from "styled-components";
import { Generators } from "@styles/generator";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  ${Generators.flexGenerator("column")};
  gap: 5rem;

  width: 60rem;
  height: 30rem;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.bgPage1};
  transform: translate(-50%, -50%);

  h1 {
    ${({ theme }) => theme.fonts["heading1"]};
  }

  p {
    ${({ theme }) => theme.fonts["body1-normal-semi"]};
  }
`;

export const Button = styled.button`
  width: 12rem;
  padding: 10px 20px;

  border: none;
  ${({ theme }) => theme.fonts["body1-normal-semi"]};
  background-color: ${({ theme }) => theme.colors.primary1};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary2};
  }
`;
