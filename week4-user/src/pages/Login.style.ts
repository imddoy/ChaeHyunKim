import styled from "styled-components";
import { Generators } from "@styles/generator";

export const LoginWrapper = styled.div`
  ${Generators.flexGenerator("column", "center", "center")}
`;

export const SignupBtn = styled.button`
  color: ${({ theme }) => theme.colors.blue_400};
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
  text-decoration: underline;
  margin: 0.5rem;
`;
