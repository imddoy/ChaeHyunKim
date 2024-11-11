import styled from "styled-components";

export const Button = styled.button`
  width: 50rem;
  height: 5rem;
  padding: 0 1.6rem;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray_700 : theme.colors.main_pink_400};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
  border-radius: 6px;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
