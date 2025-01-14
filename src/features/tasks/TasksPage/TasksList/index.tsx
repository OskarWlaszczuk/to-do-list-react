import { useSelector, useDispatch } from "react-redux";
import {
  selectTaskByQuery,
  selectHideDoneTasks,
  removeTask,
  toggleImportantContent,
  selectTasks,
  toggleTaskDone,
  selectTasksLength,
} from "../../tasksSlice";
import {
  List,
  Item,
  Button,
  ToggleDoneButton,
  Content,
  ButtonsBar,
  ButtonsBarItem,
  StyledLink
} from "./styled";
import { NotFoundMessage } from "../../../../common/NotFoundMessage";
import { EmptyTasksListMessage } from "./EmptyTasksListMessage";
import { selectIsSearchTasksEmpty } from "../../tasksSlice";
import { queryKey } from "../../queryKey";
import { useQueryParameter } from "../../useQueryParameter";
import { RootState } from "../../store";
import { useAppSelector } from "../../../../reduxTypedHooks";

const TasksList = () => {
  const queryValue = useQueryParameter(queryKey);

  const searchTasks = useSelector((state: RootState) => selectTaskByQuery(state, queryValue));
  const isSearchTasksEmpty = useSelector((state: RootState) => selectIsSearchTasksEmpty(state, queryValue));
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const tasksLength = useAppSelector(selectTasksLength);
  console.log(hideDoneTasks);
  const dispatch = useDispatch();

  const renderSearchingTasks = () => {
    return (
      searchTasks?.map(({ id, done, content, important }) => {

        const handleToggleImportant = () => dispatch(toggleImportantContent(id));
        const handleToggleDone = () => dispatch(toggleTaskDone(id));
        const handleTaskRemove = () => dispatch(removeTask(id));

        const capitalizedContent = content.slice(0, 1).toUpperCase() + content.slice(1);

        return (!hideDoneTasks || (hideDoneTasks && !done)) && (
          <Item key={id}>
            <ButtonsBar>
              <ButtonsBarItem
                title="Ustaw, jako ważne"
                disabled={done}
                $activated={important && !done}
                onClick={handleToggleImportant}
              >
                B
              </ButtonsBarItem>
            </ButtonsBar>
            <ToggleDoneButton onClick={handleToggleDone}>
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
                {capitalizedContent}
              </Content>
            </StyledLink>
            <Button onClick={handleTaskRemove}>🗑️</Button>
          </Item>
        )

      })
    );
  };

  const renderListContent = () => {
    if (isSearchTasksEmpty && !!queryValue) return <NotFoundMessage content="Nie znaleziono zadania" />
    if (!tasksLength) return <EmptyTasksListMessage />
    else return <List>{renderSearchingTasks()}</List>
  };

  return (
    <>{renderListContent()}</>
  );
};

export default TasksList;
