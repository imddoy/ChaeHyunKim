import styled from "styled-components";
import { Generators } from "@styles/generator";

export const NavContainer = styled.div`
  ${Generators.flexGenerator("row", "center", "space-between")};
  width: 100%;
  padding: 3rem;

  background-color: ${({ theme }) => theme.colors.bgElement6};
`;

export const NavigateWrapper = styled.div`
  ${Generators.flexGenerator()};
  gap: 3rem;
`;

export const Logo = styled.p`
  color: ${({ theme }) => theme.colors.primary1};
  ${({ theme }) => theme.fonts["heading1"]};
`;

export const CategoryWrapper = styled.div`
  ${Generators.flexGenerator()};
  gap: 0.8rem;
`;

export const Category = styled.span`
  padding: 0.5rem 2rem;

  border-radius: 8px;
  background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary1 : "none")};
  color: ${({ theme }) => theme.colors.buttonText};
  ${({ theme, $isSelected }) =>
    $isSelected ? theme.fonts["body1-normal-semi"] : theme.fonts["body1-normal-medi"]};

  cursor: pointer;
`;

export const GameOptionWrapper = styled.div`
  ${Generators.flexGenerator()};
  gap: 0.8rem;
`;

export const SelectLevel = styled.select`
  padding: 0.5rem;
  ${({ theme }) => theme.fonts["body1-normal-medi"]};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bgTag};
  color: ${({ theme }) => theme.colors.text1};
`;

export const Timer = styled.span`
  width: 3rem;

  ${({ theme }) => theme.fonts["body1-normal-medi"]};
  color: ${({ theme }) => theme.colors.buttonText};
`;
