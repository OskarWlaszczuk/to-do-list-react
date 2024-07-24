import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Container, SubmitButton } from "./styled";
import HeaderContent from "../../../../common/HeaderContent";
import { Input } from "../../../../common/Input";
import { Button } from "../Buttons/styled";
import { downloadExampleTasks } from "../../tasksSlice";

const Form = () => {
    const loadingButtonStatusText = "loading";
    const initialButtonStatusText = "initial";

    const [buttonStatus, setButtonStatus] = useState(initialButtonStatusText);
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
            <HeaderContent
                title="Dodaj nowe zadanie"
                extraContent={
                    <Button
                        type="button"
                        onClick={() => {
                            setButtonStatus(loadingButtonStatusText);
                            setTimeout(() => {
                                dispatch(downloadExampleTasks());
                                setButtonStatus(initialButtonStatusText);
                            }, 1000)
                        }}
                    >
                        {
                            buttonStatus === loadingButtonStatusText ?
                                <>Ładowanie...</> :
                                <>Pobierz przykładowe zadania</>
                        }
                    </Button>
                }
            />
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
                <SubmitButton type="submit">Dodaj zadanie</SubmitButton>
            </Container>
        </form >
    );
};
export default Form;