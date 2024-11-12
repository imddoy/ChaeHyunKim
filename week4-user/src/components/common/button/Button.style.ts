import styled from "styled-components";

export const Button = styled.button`
  width: 50rem;
  height: 5rem;
  padding: 0 1.6rem;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.pink_900 : theme.colors.main_pink_400};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
  border-radius: 6px;
  transition: background-color 0.5s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &: hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.pink_900 : theme.colors.pink_600};
  }
`;
