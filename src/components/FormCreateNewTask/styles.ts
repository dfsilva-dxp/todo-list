import styled, { css } from "styled-components";

export const Container = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.panel};
    display: flex;
    border-radius: ${theme.border.radius};
    margin-top: -1.875rem;

    &:focus-within {
      outline: 2px solid ${theme.colors.green};
      outline-offset: ${theme.border.outlineOffiset};
    }
  `}
`;

export const TextField = styled.input`
  ${({ theme }) => css`
    flex: 1;
    height: 3.75rem;
    border: 0;
    outline: 0;
    background: transparent;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-weight: ${theme.font.weight.bold};

    &::placeholder {
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.lightGray};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    line-height: 0;
    transition: color 0.15s ease-in-out;
    width: 3.75rem;

    &:hover,
    &:focus {
      color: ${theme.colors.green};
      outline: none;
    }
  `}
`;
