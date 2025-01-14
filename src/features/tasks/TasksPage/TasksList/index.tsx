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
  TaskItem,
  RemoveTaskButton,
  ToggleDoneButton,
  TaskContent,
  TopButtonsPanel,
  TopButtonsPanelItem,
  TaskDetailsLink
} from "./styled";
import { NotFoundMessage } from "../../../../common/NotFoundMessage";
import { Message } from "./EmptyTasksListMessage/Message";
import { selectIsSearchTasksEmpty } from "../../tasksSlice";
import { queryKey } from "../../queryKey";
import { useQueryParameter } from "../../useQueryParameter";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../../../reduxTypedHooks";

const TasksList = () => {
  const queryValue = useQueryParameter(queryKey);

  const searchTasks = useSelector((state: RootState) => selectTaskByQuery(state, queryValue));
  const isSearchTasksEmpty = useSelector((state: RootState) => selectIsSearchTasksEmpty(state, queryValue));
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const tasksLength = useAppSelector(selectTasksLength);
  const areAllTasksDone = useAppSelector(selectAreAllTasksDone);

  const dispatch = useAppDispatch();

  const renderSearchingTasks = () => {
    return (
      searchTasks?.map(({ id, done, content, important }) => {

        const handleToggleDone = () => dispatch(toggleTaskDone(id));
        const handleTaskRemove = () => dispatch(removeTask(id));

        const capitalizedContent = content.slice(0, 1).toUpperCase() + content.slice(1);

        const renderTopButtonsPanel = () => {

          const handleToggleImportant = () => dispatch(toggleImportantContent(id));
          type TopPanelButtonsActions = ReturnType<typeof handleToggleImportant>

          interface TopPanelButton {
            title: string;
            disabledCondition: boolean;
            activatedCondition: boolean;
            actionHandler: () => TopPanelButtonsActions;
            content: string;
          }

          const topButtonsPanel: TopPanelButton[] = [
            {
              title: "Ustaw, jako ważne",
              disabledCondition: done,
              activatedCondition: important && !done,
              actionHandler: handleToggleImportant,
              content: "B",
            },
          ];

          return (
            <TopButtonsPanel>
              {
                topButtonsPanel.map(({ title, disabledCondition, activatedCondition, actionHandler, content }, index) => (
                  <TopButtonsPanelItem
                    key={index}
                    title={title}
                    disabled={disabledCondition}
                    $activated={activatedCondition}
                    onClick={actionHandler}
                  >
                    {content}
                  </TopButtonsPanelItem>
                ))
              }
            </TopButtonsPanel>
          );
        };

        return (!hideDoneTasks || (hideDoneTasks && !done)) && (
          <TaskItem key={id}>
            {renderTopButtonsPanel()}
            <ToggleDoneButton onClick={handleToggleDone}>{done ? "✔" : ""}</ToggleDoneButton>
            <TaskDetailsLink
              title="Wejdź w szczegóły zadania"
              to={`/tasks/${id}`}
            >
              <TaskContent
                $justified={content.length > 160 ? true : false}
                $important={important && !done}
                $donedItem={done}
              >
                {capitalizedContent}
              </TaskContent>
            </TaskDetailsLink>
            <RemoveTaskButton onClick={handleTaskRemove}>🗑️</RemoveTaskButton>
          </TaskItem>
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