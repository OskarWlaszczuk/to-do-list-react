import { useDispatch, useSelector } from "react-redux";
import { toggleHideDoneTasks, toggleAllTaskDone, selectIsSearchTasksEmpty } from "../../tasksSlice";
import { selectTasks, selectHideDoneTasks, selectIsAllTasksDone, selectIsTasksEmpty } from "../../tasksSlice";
import { Section, Button } from "./styled";
import { queryKey } from "../../queryKey";
import { useQueryParameter } from "../../useQueryParameter";
import { TaskData } from "../../../../common/TaskData";
import { RootState } from "../../store";

const Buttons = () => {
    const tasks: TaskData[] = useSelector(selectTasks)
    const hideDoneTasks = useSelector(selectHideDoneTasks);
    const isAllDone = useSelector(selectIsAllTasksDone);
    const isTasksEmpty = useSelector(selectIsTasksEmpty);
    const query = useQueryParameter(queryKey);

    const isSearchTasksEmpty = useSelector((state:RootState) => selectIsSearchTasksEmpty(state, query!));
    const dispatch = useDispatch();

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