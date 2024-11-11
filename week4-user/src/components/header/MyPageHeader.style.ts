import styled from "styled-components";
import { Generators } from "@styles/generator";

export const MyPageHeaderContainer = styled.header`
  ${Generators.flexGenerator("row", "center", "space-between")}
  width: 100%;
  height: 10rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main_pink_400};
`;

export const NavTab = styled.section`
  ${Generators.flexGenerator()}
  gap: 5rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts["heading1"]};
`;

export const TabBtnWrapper = styled.section`
  ${Generators.flexGenerator()}
  gap: 1rem;
`;

export const TabBtn = styled.button<{ $isActive: boolean }>`
  width: 7rem;

  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.white : "none")};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.gray_800 : theme.colors.white)};
  ${({ theme }) => theme.fonts["body1-long"]};
  border-radius: 8px;
`;

export const LogoutBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts["body1-long"]};
`;
