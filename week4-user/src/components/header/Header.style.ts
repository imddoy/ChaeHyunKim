import styled from "styled-components";
import { Generators } from "@styles/generator";

export const HeaderContainer = styled.header`
  ${Generators.flexGenerator()}
  width: 100%;
  height: 10rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts["heading1"]};
`;
