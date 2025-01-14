import { useAppDispatch, useAppSelector } from "../../../../reduxTypedHooks";
import { queryKey } from "../../queryKey";
import { RootState } from "../../store";
import {
  selectAreAllTasksDone,
  selectAreSomeTasksDone,
  selectHideDoneTasks,
  selectIsSearchTasksEmpty,
  toggleAllTaskDone,
  toggleHideDoneTasks
} from "../../tasksSlice";
import { useQueryParameter } from "../../useQueryParameter";
import { ButtonRenderData } from "../interfaces/ButtonRenderData";

export const useTasksListButtonsRenderData = () => {
  const dispatch = useAppDispatch();

  const hideDoneTasks = useAppSelector(selectHideDoneTasks);
  const areAllDone = useAppSelector(selectAreAllTasksDone);
  const areSomeDone = useAppSelector(selectAreSomeTasksDone);
  const query = useQueryParameter(queryKey);
  const isSearchTasksEmpty = useAppSelector((state: RootState) => selectIsSearchTasksEmpty(state, query!));

  const tasksListButtonsRenderData: ButtonRenderData[] = [
    {
      clickEventHandler: () => dispatch(toggleHideDoneTasks()),
      disabledCondition: isSearchTasksEmpty || !areSomeDone,
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