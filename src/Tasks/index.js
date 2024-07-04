import { List, Item, Button, ToggleDoneButton, Content, ButtonsBar, ButtonsBarItem} from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTasks, toggleTasksDone }) => {
  return (
    <List>
      {tasks.map(({ id, done, content }) => {
        return (
          (!hideDoneTasks || (hideDoneTasks && !done)) && (
            <Item key={id}>
              <ButtonsBar>
                <ButtonsBarItem>B</ButtonsBarItem>
                <ButtonsBarItem $italic>I</ButtonsBarItem>
              </ButtonsBar>
              <ToggleDoneButton onClick={() => toggleTasksDone(id)}>
                {done ? "✔" : ""}
              </ToggleDoneButton>
              <Content $donedItem={done}>{content}</Content>
              <Button onClick={() => removeTasks(id)}>🗑️</Button>
            </Item>
          )
        );
      })}
    </List>
  );
};

export default Tasks;
