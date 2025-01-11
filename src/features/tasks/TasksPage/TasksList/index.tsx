import { useSelector, useDispatch } from "react-redux";
import { selectTaskByQuery, selectHideDoneTasks, selectTasks } from "../../tasksSlice";
import { toggleTaskDone, removeTask, toggleImportantContent } from "../../tasksSlice";
import { List, Item, Button, ToggleDoneButton, Content, ButtonsBar, ButtonsBarItem, StyledLink } from "./styled";
import { NotFound } from "../../../../common/NotFound";
import { EmptyTasksList } from "./EmptyTasksList";
import { selectIsSearchTasksEmpty } from "../../tasksSlice";
import { queryKey } from "../../queryKey";
import { useQueryParameter } from "../../useQueryParameter";
import { RootState } from "../../store";

const TasksList = () => {
  const query = useQueryParameter(queryKey);

  const searchTasks = useSelector((state: RootState) => selectTaskByQuery(state, query));
  const isSearchTasksEmpty = useSelector((state: RootState) => selectIsSearchTasksEmpty(state, query));

  const allTasks = useSelector(selectTasks);
  const hideDoneTasks = useSelector(selectHideDoneTasks);

  const dispatch = useDispatch();

  return (
    isSearchTasksEmpty && query ?
      <NotFound content="Nie znaleziono zadania" /> :
      (!allTasks.length ?
        <EmptyTasksList /> :
        <List>
          {searchTasks.map(({ id, done, content, important }) => {
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
                  <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(id))}>
                    {done ? "✔" : ""}
                  </ToggleDoneButton>
                  <StyledLink
                    title="Wejdź w szczegóły zadania"
                    to={`/tasks/${id}`}
                  >
                    <Content
                      $justified={content.length > 160 ? true : false}
                      $important={important && !done}
                      $donedItem={done}
                    >
                      {content.slice(0, 1).toUpperCase() + content.slice(1)}
                    </Content>
                  </StyledLink>
                  <Button onClick={() => dispatch(removeTask(id))}>🗑️</Button>
                </Item>
              )
            );
          })}
        </List>
      )
  );
};

export default TasksList;
