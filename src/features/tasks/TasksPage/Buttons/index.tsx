import {
    toggleHideDoneTasks,
    toggleAllTaskDone,
    selectIsSearchTasksEmpty,
    selectHideDoneTasks,
    selectAreAllTasksDone,
    selectIsTasksListEmpty,
    selectAreSomeTasksDone
} from "../../tasksSlice";
import { Section, Button } from "./styled";
import { queryKey } from "../../queryKey";
import { useQueryParameter } from "../../useQueryParameter";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../../../reduxTypedHooks";
import { ReactNode } from "react";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

export const Buttons = () => {
    const query = useQueryParameter(queryKey);
    const dispatch = useAppDispatch();

    const hideDoneTasks = useAppSelector(selectHideDoneTasks);

    const areAllDone = useAppSelector(selectAreAllTasksDone);
    const areSomeDone = useAppSelector(selectAreSomeTasksDone);

    const isTasksListEmpty = useAppSelector(selectIsTasksListEmpty);
    const isSearchTasksEmpty = useAppSelector((state: RootState) => selectIsSearchTasksEmpty(state, query!));

    interface ButtonRenderData {
        action: ActionCreatorWithoutPayload;
        disabledCondition: boolean;
        content: ReactNode;
    }

    const buttonsRenderData: ButtonRenderData[] = [
        {
            action: toggleHideDoneTasks,
            disabledCondition: isSearchTasksEmpty || !areSomeDone,
            content: <>{hideDoneTasks && areSomeDone ? "Pokaż" : "Ukryj"} ukończone</>
        },
        {
            action: toggleAllTaskDone,
            disabledCondition: areAllDone || isSearchTasksEmpty,
            content: areAllDone ? "Ukończono" : "Ukończ wszystkie",
        },
    ];

    return (
        <Section>
            {!isTasksListEmpty && (
                buttonsRenderData.map(({ action, disabledCondition, content }, index) => (
                    <Button
                        key={index}
                        onClick={() => dispatch(action())}
                        disabled={disabledCondition}
                    >
                        {content}
                    </Button>
                ))
            )}
        </Section>
    );
};