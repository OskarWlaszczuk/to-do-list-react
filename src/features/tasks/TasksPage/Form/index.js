import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Header, Container, Input, Button } from "./styled";

const Form = ({ title }) => {
    const [newTaskContent, setNewTaskContent] = useState("Zagrać w Wiedźmina");
    const inputRef = useRef(null);

    const dispatch = useDispatch();
    const focusOnInput = () => inputRef.current.focus();

    const onFormSubmit = event => {
        event.preventDefault();
        focusOnInput();
        setNewTaskContent("");

        const newTaskContentTrimmed = newTaskContent.trim();
        newTaskContentTrimmed && (
            dispatch(addTask({
                content: newTaskContentTrimmed,
                done: false,
                id: nanoid(),
            }))
        );
    };

    const onInputChange = ({ target }) => setNewTaskContent(newTaskContent => newTaskContent = target.value);

    return (
        <form onSubmit={onFormSubmit}>
            <Header>
                {title}
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
        </form >
    );
};
export default Form;