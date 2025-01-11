import {
    toggleHideDoneTasks,
    toggleAllTaskDone,
    selectIsSearchTasksEmpty,
    selectTasks,
    selectHideDoneTasks,
    selectIsAllTasksDone,
    selectIsTasksEmpty
} from "../../tasksSlice";
import { Section, Button } from "./styled";
import { queryKey } from "../../queryKey";
import { useQueryParameter } from "../../useQueryParameter";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../../../reduxTypedHooks";

const Buttons = () => {
    const tasks = useAppSelector(selectTasks)
    const hideDoneTasks = useAppSelector(selectHideDoneTasks);
    const isAllDone = useAppSelector(selectIsAllTasksDone);
    const isTasksEmpty = useAppSelector(selectIsTasksEmpty);
    const query = useQueryParameter(queryKey);

    const isSearchTasksEmpty = useAppSelector((state: RootState) => selectIsSearchTasksEmpty(state, query!));
    const dispatch = useAppDispatch();

    return (
        <Section>
            {!isTasksEmpty && (
                <>
                    <Button
                        disabled={isSearchTasksEmpty}
                        onClick={() => dispatch(toggleHideDoneTasks())}>
                        {
                            hideDoneTasks && tasks.some(({ done }) => done) ?
                                'Pokaż' :
                                'Ukryj'
                        } ukończone
                    </Button>
                    <Button
                        disabled={isAllDone || isSearchTasksEmpty}
                        onClick={() => dispatch(toggleAllTaskDone())}
                    >
                        {isAllDone ? <>Ukończono</> : <> Ukończ wszystkie</>}
                    </Button>
                </>
            )}
        </Section>
    )
};

export default Buttons;