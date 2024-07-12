import { Section, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, toggleAllTaskDone }) => {

    return (
        tasks.length > 0 && (
            <Section>
                <Button onClick={toggleHideDoneTasks}>
                    {hideDoneTasks && tasks.some(({ done }) => done) ? 'Pokaż' : 'Ukryj'} ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={toggleAllTaskDone}
                >
                    Ukończ wszystkie
                </Button>
            </Section>
        ))
};

export default Buttons;