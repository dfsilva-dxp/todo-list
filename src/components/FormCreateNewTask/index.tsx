import { PaperPlaneRight } from "phosphor-react";

import { Button, Container, TextField } from "./styles";

export default function FormCreateNewTask() {
  return (
    <Container>
      <TextField type="text" placeholder="Adicionar tarefa..." autoFocus />
      <Button>
        <PaperPlaneRight size={24} />
      </Button>
    </Container>
  );
}
