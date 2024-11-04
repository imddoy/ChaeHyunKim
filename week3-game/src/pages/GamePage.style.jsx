import styled from "styled-components";
import { Generators } from "@styles/generator";

export const NumInfo = styled.h1`
  ${({ theme }) => theme.fonts["heading1"]};
`;

export const NumBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$gridSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.$gridSize}, 1fr);
  gap: 1rem;
`;

export const NumBox = styled.div`
  ${Generators.flexGenerator()};
  width: 5rem;
  height: 5rem;

  ${({ theme }) => theme.fonts["body1-normal-medi"]};
  background-color: ${({ theme, $isNew }) =>
    $isNew ? theme.colors.primary2 : theme.colors.primary1};
  color: ${({ theme }) => theme.colors.bgInvert};

  border-radius: 4px;
  cursor: pointer;
  ${({ $isEmpty }) => ($isEmpty ? "visibility: hidden;" : "visibility: visible;")};

  &:active {
    opacity: 0.4;
    filter: brightness(70%);
  }
`;
