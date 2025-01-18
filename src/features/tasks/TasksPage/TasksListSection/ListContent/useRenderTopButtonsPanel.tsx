import { TaskData } from "../../../../../common/aliases/interfaces/TaskData";
import { useAppDispatch } from "../../../../../common/hooks/reduxTypedHooks";
import { toggleImportantContent } from "../../../tasksSlice";
import { TopButtonsPanel, TopButtonsPanelItem } from "./styled";

export const useRenderTopButtonsPanel = () => {
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