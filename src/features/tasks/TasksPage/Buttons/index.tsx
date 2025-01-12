import {
    toggleHideDoneTasks,
    toggleAllTaskDone,
    selectIsSearchTasksEmpty,
    selectTasks,
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

const Buttons = () => {
    const query = useQueryParameter(queryKey);
    const dispatch = useAppDispatch();

    const hideDoneTasks = useAppSelector(selectHideDoneTasks);

    const areAllDone = useAppSelector(selectAreAllTasksDone);
    const areSomeDone = useAppSelector(selectAreSomeTasksDone);

    const isTasksListEmpty = useAppSelector(selectIsTasksListEmpty);
    const isSearchTasksEmpty = useAppSelector((state: RootState) => selectIsSearchTasksEmpty(state, query!));

    return (
        <Section>
            {!isTasksListEmpty && (
                <>
                    <Button
                        disabled={isSearchTasksEmpty || !areSomeDone}
                        onClick={() => dispatch(toggleHideDoneTasks())}>
                        {
                            hideDoneTasks && areSomeDone ?
                                'Pokaż' :
                                'Ukryj'
                        } ukończone
                    </Button>
                    <Button
                        disabled={areAllDone || isSearchTasksEmpty}
                        onClick={() => dispatch(toggleAllTaskDone())}
                    >
                        {areAllDone ? <>Ukończono</> : <> Ukończ wszystkie</>}
                    </Button>
                </>
            )}
        </Section>
    )
};

export default Buttons;