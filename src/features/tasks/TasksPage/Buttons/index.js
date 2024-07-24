import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { toggleHideDoneTasks, toggleAllTaskDone, selectIsSearchTasksEmpty } from "../../tasksSlice";
import { selectTasks, selectHideDoneTasks, selectIsAllTasksDone, selectIsTasksEmpty } from "../../tasksSlice";
import { Section, Button } from "./styled";

const Buttons = () => {
    const tasks = useSelector(selectTasks)
    const hideDoneTasks = useSelector(selectHideDoneTasks);
    const isAllDone = useSelector(selectIsAllTasksDone);
    const isTasksEmpty = useSelector(selectIsTasksEmpty);
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const isSearchTasksEmpty = useSelector(state => selectIsSearchTasksEmpty(state, query));
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