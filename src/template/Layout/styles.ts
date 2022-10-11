import styled, { css } from "styled-components";

export const Content = styled.main`
  width: 100%;
  height: auto;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;

    @media (max-width: 1185px) {
      padding: 0 0.9375rem;
    }
  `}
`;
