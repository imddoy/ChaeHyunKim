import styled from "styled-components";
import { Generators } from "@styles/generator";

export const Table = styled.table`
  width: 80rem;
  border: 1px solid ${({ theme }) => theme.colors.border3};
`;

export const TableHeader = styled.th`
  ${({ theme }) => theme.fonts["body1-normal-semi"]};
  background-color: ${({ theme }) => theme.colors.primary1};
  padding: 1rem;
  text-align: left;
`;

export const TableRow = styled.tr`
  ${({ theme }) => theme.fonts["body1-normal-medi"]};

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.bgElement8};
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border3};
  border-right: 1px solid ${({ theme }) => theme.colors.border3};
`;
