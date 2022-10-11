import styled, { css } from "styled-components";

import * as LayoutStyles from "template/Layout/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 13.25rem;
    padding-top: 5rem;
    background: ${theme.colors.banner};
  `}
`;

export const Navbar = styled(LayoutStyles.Container)`
  ${({ theme }) => css`
    h4 {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Logo = styled.img`
  width: 4.5rem;
`;
