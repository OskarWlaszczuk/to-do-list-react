import { useAppDispatch, useAppSelector } from "../../../../../common/hooks/reduxTypedHooks";
import { queryKey } from "../../../../../common/constants/queryKey";
import { RootState } from "../../../../../core/store";
import {
    removeTask,
    selectHideDoneTasks,
    selectTaskByQuery,
    toggleTaskDone
} from "../../../tasksSlice";
import { useQueryParameter } from "../../../../../common/hooks/useQueryParameter";
import {
    RemoveTaskButton,
    TaskContent,
    TaskDetailsLink,
    TaskItem,
    ToggleDoneButton,
} from "./styled";
import { useRenderTopButtonsPanel } from "./useRenderTopButtonsPanel";



export const useRenderSearchingTasks = () => {
    const dispatch = useAppDispatch();
    const queryValue = useQueryParameter(queryKey);

    const searchTasks = useAppSelector((state: RootState) => selectTaskByQuery(state, queryValue));
    const hideDoneTasks = useAppSelector(selectHideDoneTasks);

    const renderTopButtonPanel = useRenderTopButtonsPanel()

    const renderSearchingTasks = () => (
        searchTasks?.map((task) => {
            const { id, done, content, important } = task;

            const handleToggleDone = () => dispatch(toggleTaskDone(id));
            const handleTaskRemove = () => dispatch(removeTask(id));

            const capitalizedContent = content.slice(0, 1).toUpperCase() + content.slice(1);

            return (!hideDoneTasks || (hideDoneTasks && !done)) && (
                <TaskItem key={id}>
                    {renderTopButtonPanel(task)}
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

    return renderSearchingTasks;
};