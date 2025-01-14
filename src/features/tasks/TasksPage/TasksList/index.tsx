import { useSelector } from "react-redux";
import {
  selectHideDoneTasks,
  selectTasksLength,
  selectAreAllTasksDone,
} from "../../tasksSlice";
import {
  List,
} from "./styled";
import { NotFoundMessage } from "../../../../common/NotFoundMessage";
import { Message } from "./EmptyTasksListMessage/Message";
import { selectIsSearchTasksEmpty } from "../../tasksSlice";
import { queryKey } from "../../queryKey";
import { useQueryParameter } from "../../useQueryParameter";
import { RootState } from "../../store";
import { useAppSelector } from "../../../../reduxTypedHooks";
import { useRenderSearchingTasks } from "../hooks/useRenderSearchingTasks";

const TasksList = () => {
  const queryValue = useQueryParameter(queryKey);
  const renderSearchingTasks = useRenderSearchingTasks();

  const areAllTasksDone = useAppSelector(selectAreAllTasksDone);
  const isSearchTasksEmpty = useSelector((state: RootState) => selectIsSearchTasksEmpty(state, queryValue));

  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const tasksLength = useAppSelector(selectTasksLength);

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