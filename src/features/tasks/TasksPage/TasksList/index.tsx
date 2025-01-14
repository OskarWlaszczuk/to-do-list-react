import { useSelector, useDispatch } from "react-redux";
import {
  selectTaskByQuery,
  selectHideDoneTasks,
  removeTask,
  toggleImportantContent,
  toggleTaskDone,
  selectTasksLength,
  selectAreAllTasksDone,
} from "../../tasksSlice";
import {
  List,
  Item,
  Button,
  ToggleDoneButton,
  Content,
  ButtonsBar,
  ButtonsBarItem,
  TaskDetailsLink
} from "./styled";
import { NotFoundMessage } from "../../../../common/NotFoundMessage";
import { Message } from "./EmptyTasksListMessage/Message";
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
  const areAllTasksDone = useAppSelector(selectAreAllTasksDone);

  const dispatch = useDispatch();

  const renderSearchingTasks = () => {
    return (
      searchTasks?.map(({ id, done, content, important }) => {

        const handleToggleImportant = () => dispatch(toggleImportantContent(id));
        const handleToggleDone = () => dispatch(toggleTaskDone(id));
        const handleTaskRemove = () => dispatch(removeTask(id));

        const capitalizedContent = content.slice(0, 1).toUpperCase() + content.slice(1);

        const renderTopButtonsPanel = () => {
          const topButtonsPanel = [
            {
              title: "Ustaw, jako ważne",
              disabledCondition: done,
              activatedCondition: important && !done,
              actionHandler: handleToggleImportant,
              content: "B",
            },
          ];

          return (
            <ButtonsBar>
              {topButtonsPanel.map(({ title, disabledCondition, activatedCondition, actionHandler, content }, index) => (
                <ButtonsBarItem
                  key={index}
                  title={title}
                  disabled={disabledCondition}
                  $activated={activatedCondition}
                  onClick={actionHandler}
                >
                  {content}
                </ButtonsBarItem>
              ))}
            </ButtonsBar>
          );
        };

        return (!hideDoneTasks || (hideDoneTasks && !done)) && (
          <Item key={id}>
            {renderTopButtonsPanel()}
            <ToggleDoneButton onClick={handleToggleDone}>{done ? "✔" : ""}</ToggleDoneButton>
            <TaskDetailsLink
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
            </TaskDetailsLink>
            <Button onClick={handleTaskRemove}>🗑️</Button>
          </Item>
        )
      })
    );
  };

  const renderListContent = () => {
    if (isSearchTasksEmpty && !!queryValue) return <NotFoundMessage content="Nie znaleziono zadania" />
    if (!tasksLength) return <Message text="Lista zadań jest pusta" />
    if (areAllTasksDone && hideDoneTasks) return <Message text="Lista zadań jest ukończona i ukryta" />
    else return <List>{renderSearchingTasks()}</List>
  };

  return (
    <>{renderListContent()}</>
  );
};

export default TasksList;
