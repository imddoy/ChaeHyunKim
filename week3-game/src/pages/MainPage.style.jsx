import styled from "styled-components";
import { Generators } from "@styles/generator";

export const PageContainer = styled.div`
  ${Generators.flexGenerator("column")};
  gap: 3rem;

  padding: 5rem;
`;
