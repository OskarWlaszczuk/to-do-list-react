import { useDispatch, useSelector } from "react-redux";
import { toggleHideDoneTasks, toggleAllTaskDone } from "../tasksSlice";
import { selectTasksState, selectIsAllDone } from "../tasksSlice";
import { Section, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDoneTasks } = useSelector(selectTasksState)
    const { isAllDone } = useSelector(selectIsAllDone);
    const dispatch = useDispatch();
    console.log(isAllDone)
    return (
        tasks.length > 0 && (
            <Section>
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
            </Section>
        ))
};

export default Buttons;