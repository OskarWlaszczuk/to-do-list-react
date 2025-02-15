import { useSelector } from "react-redux";
import { selectHideDoneTasks, selectTasksLength, selectAreAllTasksDone } from "../../../tasksSlice";
import { List, } from "./styled";
import { Message } from "../../../../../common/components/Message";
import { selectIsSearchTasksEmpty } from "../../../tasksSlice";
import { QUERY_KEY } from "../../../../../common/constants/QUERY_KEY";
import { useQueryParameter } from "../../../../../common/hooks/useQueryParameter";
import { RootState } from "../../../../../core/store";
import { useAppSelector } from "../../../../../common/hooks/reduxTypedHooks";
import { useRenderSearchingTasks } from "./useRenderSearchingTasks";

const ListContent = () => {
  const queryValue = useQueryParameter(QUERY_KEY);
  const renderSearchingTasks = useRenderSearchingTasks();

  const areAllTasksDone = useAppSelector(selectAreAllTasksDone);
  const isSearchTasksEmpty = useSelector((state: RootState) => selectIsSearchTasksEmpty(state, queryValue));

  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const tasksLength = useAppSelector(selectTasksLength);

  const renderListContent = () => {
    if (isSearchTasksEmpty && !!queryValue) return <Message noResults text="Nie znaleziono zadania" />
    if (!tasksLength) return <Message text="Lista zadań jest pusta" />
    if (areAllTasksDone && hideDoneTasks) return <Message text="Lista zadań jest ukończona i ukryta" />
    else return <List>{renderSearchingTasks()}</List>
  };

  return (
    <>{renderListContent()}</>
  );
};

export default ListContent;