import { useAppDispatch, useAppSelector } from "../../../../common/hooks/reduxTypedHooks";
import { QUERY_KEY } from "../../../../common/constants/QUERY_KEY";
import { RootState } from "../../../../core/store";
import {
  selectAreAllTasksDone,
  selectAreSomeTasksDone,
  selectHideDoneTasks,
  selectIsSearchTasksEmpty,
  toggleAllTaskDone,
  toggleHideDoneTasks
} from "../../tasksSlice";
import { useQueryParameter } from "../../../../common/hooks/useQueryParameter";
import { ButtonRenderData } from "../../../../common/aliases/interfaces/ButtonRenderData";

export const useTasksListButtonsRenderData = () => {
  const dispatch = useAppDispatch();
  const query = useQueryParameter(QUERY_KEY);

  const hideDoneTasks = useAppSelector(selectHideDoneTasks);
  const areAllDone = useAppSelector(selectAreAllTasksDone);
  const areSomeDone = useAppSelector(selectAreSomeTasksDone);
  const isSearchTasksEmpty = useAppSelector((state: RootState) => selectIsSearchTasksEmpty(state, query!));

  const tasksListButtonsRenderData: ButtonRenderData[] = [
    {
      clickEventHandler: () => dispatch(toggleHideDoneTasks()),
      disabledCondition: !areSomeDone,
      content: <>
        {hideDoneTasks && areSomeDone ? "Pokaż" : "Ukryj"} ukończone
      </>
    },
    {
      clickEventHandler: () => dispatch(toggleAllTaskDone()),
      disabledCondition: areAllDone || isSearchTasksEmpty,
      content: areAllDone ? "Ukończono" : "Ukończ wszystkie",
    },
  ];

  return tasksListButtonsRenderData;
};