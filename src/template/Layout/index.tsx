import { Banner, FormCreateNewTask } from "components";

import { Container, Content } from "./styles";

export default function Layout() {
  return (
    <Content>
      <Banner />

      <Container>
        <FormCreateNewTask />
      </Container>
    </Content>
  );
}
