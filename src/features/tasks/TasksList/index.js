import { List, Item, Button, ToggleDoneButton, Content, ButtonsBar, ButtonsBarItem } from "./styled";

const TasksList = ({ tasks, hideDoneTasks, removeTasks, toggleTasksDone, toggleImportantContent }) => {

  return (
    <List>
      {tasks.map(({ id, done, content, important }) => {
        return (
          (!hideDoneTasks || (hideDoneTasks && !done)) && (
            <Item key={id}>
              <ButtonsBar>
                <ButtonsBarItem
                  title="Ustaw, jako ważne"
                  disabled={done}
                  $activated={important}
                  onClick={() => toggleImportantContent(id)}
                >
                  B
                </ButtonsBarItem>
              </ButtonsBar>
              <ToggleDoneButton onClick={() => {
                toggleTasksDone(id);
                if (important) {
                  toggleImportantContent(id)
                };
              }}>
                {done ? "✔" : ""}
              </ToggleDoneButton>
              <Content $important={important} $donedItem={done}>{content}</Content>
              <Button onClick={() => removeTasks(id)}>🗑️</Button>
            </Item>
          )
        );
      })}
    </List>
  );
};

export default TasksList;
