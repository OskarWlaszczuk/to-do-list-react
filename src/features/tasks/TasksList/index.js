import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { toggleTaskDone, removeTask, toggleImportantContent } from "../tasksSlice";
import { List, Item, Button, ToggleDoneButton, Content, ButtonsBar, ButtonsBarItem } from "./styled";

const TasksList = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();

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
                  $activated={important && !done}
                  onClick={() => dispatch(toggleImportantContent(id))}
                >
                  B
                </ButtonsBarItem>
              </ButtonsBar>
              <ToggleDoneButton onClick={
                () => dispatch(toggleTaskDone(id))
              }
              >
                {done ? "✔" : ""}
              </ToggleDoneButton>
              <Content $important={important && !done} $donedItem={done}>{content}</Content>
              <Button
                onClick={() => dispatch(removeTask(id))}
              >
                🗑️
              </Button>
            </Item>
          )
        );
      })}
    </List>
  );
};

export default TasksList;
