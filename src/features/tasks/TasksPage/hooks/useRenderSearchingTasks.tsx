import { useAppDispatch, useAppSelector } from "../../../../reduxTypedHooks";
import { queryKey } from "../../queryKey";
import { RootState } from "../../store";
import { removeTask, selectHideDoneTasks, selectTaskByQuery, toggleImportantContent, toggleTaskDone } from "../../tasksSlice";
import { useQueryParameter } from "../../useQueryParameter";
import { RemoveTaskButton, TaskContent, TaskDetailsLink, TaskItem, ToggleDoneButton, TopButtonsPanel, TopButtonsPanelItem } from "../TasksList/styled";

export const useRenderSearchingTasks = () => {
    const dispatch = useAppDispatch();
    const queryValue = useQueryParameter(queryKey);

    const searchTasks = useAppSelector((state: RootState) => selectTaskByQuery(state, queryValue));
    const hideDoneTasks = useAppSelector(selectHideDoneTasks);

    const renderSearchingTasks = () => (
        searchTasks?.map(({ id, done, content, important }) => {

            const handleToggleDone = () => dispatch(toggleTaskDone(id));
            const handleTaskRemove = () => dispatch(removeTask(id));
            const handleToggleImportant = () => dispatch(toggleImportantContent(id));

            const capitalizedContent = content.slice(0, 1).toUpperCase() + content.slice(1);

            const renderTopButtonsPanel = () => {
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

    return renderSearchingTasks;
};