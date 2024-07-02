import { useState } from "react";
import { TaskForm, Header, Container, Input, Button } from "./styled";

const Form = ({ addNewTaskContent }) => {
    const [newTaskContent, setNewTaskContent] = useState("Zagrać w Wiedźmina");

    const onFormSubmit = event => {
        event.preventDefault();
        setNewTaskContent("");
    };

    const onInputChange = ({ target }) => {
        setNewTaskContent(newTaskContent => newTaskContent = target.value);
    };

    return (
        <TaskForm onSubmit={onFormSubmit}>
            <Header>
                Dodaj nowe zadanie
            </Header>
            <Container>
                <Input
                    value={newTaskContent}
                    onChange={onInputChange}
                    required
                    autoFocus
                    placeholder="Co jest do zrobienia"
                    type="text"
                    name="newTask"
                />
                <Button
                    onClick={() => {
                        newTaskContent && (
                            addNewTaskContent(newTaskContent)
                        );
                    }}
                >
                    Dodaj zadanie
                </Button>
            </Container>
        </TaskForm >
    );
};
export default Form;