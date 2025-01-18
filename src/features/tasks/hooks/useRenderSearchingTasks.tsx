import { TaskData } from "../../../common/aliases/interfaces/TaskData";
import { useAppDispatch, useAppSelector } from "../../../common/hooks/reduxTypedHooks";
import { queryKey } from "../../../common/constants/queryKey";
import { RootState } from "../../../core/store";
import { removeTask, selectHideDoneTasks, selectTaskByQuery, toggleImportantContent, toggleTaskDone } from "../slices/tasksSlice";
import { useQueryParameter } from "../../../common/hooks/useQueryParameter";
import {
    RemoveTaskButton,
    TaskContent,
    TaskDetailsLink,
    TaskItem,
    ToggleDoneButton,
    TopButtonsPanel,
    TopButtonsPanelItem
} from "../components/TasksPage/TasksListSection/ListContent/styled";

const useRenderTopButtonsPanel = () => {
    const dispatch = useAppDispatch();

    const renderTopButtonPanel = ({ done, important, id }: TaskData) => {
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

    return renderTopButtonPanel;
};


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