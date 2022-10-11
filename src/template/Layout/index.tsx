import { Container, Content } from "./styles";

import { LayoutProps } from "./type";

export default function Layout({ children }: LayoutProps) {
  return (
    <Content>
      <h1>Header</h1>
      <Container>{children}</Container>
    </Content>
  );
}
