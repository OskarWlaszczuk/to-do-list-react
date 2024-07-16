import { useDispatch, useSelector } from "react-redux";
import { toggleHideDoneTasks, toggleAllTaskDone } from "../tasksSlice";
import { selectTasks } from "../tasksSlice";
import { Section, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDoneTasks } = useSelector(selectTasks)
    const dispatch = useDispatch();

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
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(toggleAllTaskDone())}
                >
                    Ukończ wszystkie
                </Button>
            </Section>
        ))
};

export default Buttons;