import styled from "styled-components";
import { Generators } from "@styles/generator";

export const HobbyWrapper = styled.div`
  ${Generators.flexGenerator("column", "start", "center")}
  width: 50rem;
  margin: 0 auto;
  padding: 5rem 0;
`;

export const Title = styled.h2`
  height: 5rem;
  color: ${({ theme }) => theme.colors.gray_0};
  ${({ theme }) => theme.fonts["heading3"]};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray_0};
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
`;
