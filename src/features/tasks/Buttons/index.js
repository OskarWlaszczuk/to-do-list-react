import { useDispatch, useSelector } from "react-redux";
import { toggleHideDoneTasks, toggleAllTaskDone, downloadExampleTasks } from "../tasksSlice";
import { selectTasks, selectHideDoneTasks, selectIsAllTasksDone, selectIsTasksEmpty } from "../tasksSlice";
import { Section, Button } from "./styled";

const Buttons = () => {
    const tasks = useSelector(selectTasks)
    const hideDoneTasks = useSelector(selectHideDoneTasks);
    const isAllDone = useSelector(selectIsAllTasksDone);
    const isTasksEmpty = useSelector(selectIsTasksEmpty);

    const dispatch = useDispatch();

    return (

        <Section>
            <Button
                onClick={() => dispatch(downloadExampleTasks())}
            >
                Pobierz przykładowe zadania
            </Button>
            {!isTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDoneTasks())}>
                        {
                            hideDoneTasks && tasks.some(({ done }) => done) ?
                                'Pokaż' :
                                'Ukryj'
                        } ukończone
                    </Button>
                    <Button
                        disabled={isAllDone}
                        onClick={() => dispatch(toggleAllTaskDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Section>
    )
};

export default Buttons;