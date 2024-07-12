import { useRef, useState } from "react";
import { TaskForm, Header, Container, Input, Button } from "./styled";

const Form = ({ addNewTaskContent }) => {
    const [newTaskContent, setNewTaskContent] = useState("Zagrać w Wiedźmina");
    const inputRef = useRef(null);

    const focusOnInput = () => inputRef.current.focus();

    const onFormSubmit = event => {
        event.preventDefault();
        focusOnInput();
        setNewTaskContent("");
        newTaskContent && (
            addNewTaskContent(newTaskContent)
        );
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
                    ref={inputRef}
                    value={newTaskContent}
                    onChange={onInputChange}
                    required
                    autoFocus
                    placeholder="Co jest do zrobienia"
                    type="text"
                    name="newTask"
                />
                <Button type="submit">Dodaj zadanie</Button>
            </Container>
        </TaskForm >
    );
};
export default Form;