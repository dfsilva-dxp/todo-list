import { Container, Logo, Navbar } from "./styles";

export default function Banner() {
  return (
    <Container>
      <Navbar>
        <Logo
          src="./doit-logo.svg"
          alt="Logotipo _DoIt"
          title="Logotipo _DoIt"
        />
      </Navbar>
    </Container>
  );
}
