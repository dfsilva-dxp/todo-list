import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    h1 {
      font-size: 1.5rem;
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    height: table;

    li {
      display: flex;
      gap: ${theme.spacings.xsmall};
      background: ${theme.colors.panel};
      padding: ${theme.spacings.xsmall};
      border-radius: ${theme.border.radius};

      & + li {
        margin-top: ${theme.spacings.xxsmall};
      }
    }
  `}
`;

export const DisplayTask = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    justify-content: space-between;

    strong {
      color: ${theme.colors.lightGray};
    }

    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.bold};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.banner};
    appearance: none;
    width: 1.375rem;
    height: 1.375rem;
    border: 0.2rem solid ${theme.colors.background};
    border-radius: 0.2rem;
    position: relative;
    outline: none;

    transition: background border ${theme.transition.fast};

    &:before {
      content: "";
      width: 0.275rem;
      height: 0.5rem;
      border: 0.2rem solid ${theme.colors.background};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      outline: 2px solid ${theme.colors.green};
      outline-offset: ${theme.border.outlineOffiset};
    }

    &:checked {
      border-color: ${theme.colors.green};
      background: ${theme.colors.green};
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const DeleteItem = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    line-height: 0;
    border-radius: 2px;
    transition: color 0.15s ease-in-out;

    &:hover {
      color: ${theme.colors.red};
    }

    &:focus {
      outline: 2px solid ${theme.colors.green};
      outline-offset: ${theme.border.outlineOffiset};
    }
  `}
`;
