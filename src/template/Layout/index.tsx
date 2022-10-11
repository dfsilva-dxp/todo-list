import { Banner } from "components";

import { Container, Content } from "./styles";

import { LayoutProps } from "./type";

export default function Layout({ children }: LayoutProps) {
  return (
    <Content>
      <Banner />
      <Container>{children}</Container>
    </Content>
  );
}
