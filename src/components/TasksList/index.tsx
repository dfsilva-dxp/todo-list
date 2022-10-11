import { Trash } from "phosphor-react";
import { Container, DeleteItem, DisplayTask, Input, List } from "./styles";

export default function TasksList() {
  return (
    <Container>
      <h1>Minha lista de tarefas</h1>

      <List>
        <li>
          <span>
            <Input type="checkbox" role="checkbox" />
          </span>

          <DisplayTask>
            <strong>Label da task</strong>
            <span>11 de Out. 2022</span>
          </DisplayTask>

          <DeleteItem>
            <Trash size={22} />
          </DeleteItem>
        </li>
        <li>
          <span>
            <Input type="checkbox" role="checkbox" />
          </span>

          <DisplayTask>
            <strong>Label da task</strong>
            <span>11 de Out. 2022</span>
          </DisplayTask>

          <DeleteItem>
            <Trash size={22} />
          </DeleteItem>
        </li>
        <li>
          <span>
            <Input type="checkbox" role="checkbox" />
          </span>

          <DisplayTask>
            <strong>Label da task</strong>
            <span>11 de Out. 2022</span>
          </DisplayTask>

          <DeleteItem>
            <Trash size={22} />
          </DeleteItem>
        </li>
      </List>
    </Container>
  );
}
