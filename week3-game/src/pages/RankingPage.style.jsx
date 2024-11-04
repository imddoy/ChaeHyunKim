import styled from "styled-components";
import { Generators } from "@styles/generator";

export const RankingHeader = styled.div`
  position: relative;
  ${Generators.flexGenerator()};
  width: 70rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts["heading1"]};
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  height: 3.2rem;

  border: none;
  ${({ theme }) => theme.fonts["body1-normal-medi"]};
  background-color: ${({ theme }) => theme.colors.bgElement2};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgElement1};
  }
`;
