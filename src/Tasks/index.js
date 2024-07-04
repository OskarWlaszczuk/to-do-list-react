import { List, Item, Button, ToggleDoneButton, Content, ButtonsBar, ButtonsBarItem } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTasks, toggleTasksDone, toggleBoldContent }) => {

  return (
    <List>
      {tasks.map(({ id, done, content, bold }) => {
        return (
          (!hideDoneTasks || (hideDoneTasks && !done)) && (
            <Item key={id}>
              <ButtonsBar>
                <ButtonsBarItem
                  disabled={done}
                  $activated={bold}
                  onClick={() => toggleBoldContent(id)}
                >
                  B
                </ButtonsBarItem>
                <ButtonsBarItem $italic>I</ButtonsBarItem>
              </ButtonsBar>
              <ToggleDoneButton onClick={() => {
                toggleTasksDone(id);
                if (bold) {
                  toggleBoldContent(id)
                };
              }}>
                {done ? "✔" : ""}
              </ToggleDoneButton>
              <Content $bold={bold} $donedItem={done}>{content}</Content>
              <Button onClick={() => removeTasks(id)}>🗑️</Button>
            </Item>
          )
        );
      })}
    </List>
  );
};

export default Tasks;
