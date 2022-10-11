import styled, { css } from "styled-components";

import * as LayoutStyles from "template/Layout/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 15rem;
    padding-top: ${theme.spacings.large};
    background: ${theme.colors.banner};
  `}
`;

export const Navbar = styled(LayoutStyles.Container)``;

export const Logo = styled.img`
  width: 4.5rem;
`;
