import { FormEventHandler, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Container, SubmitButton } from "./styled";
import { HeaderPanel } from "../../../../common/HeaderPanel";
import { Input } from "../../../../common/Input";
import { Button } from "../Buttons/styled";
import { downloadExampleTasks } from "../../tasksSlice";
import { TaskData } from "../../../../common/TaskData";

const Form = () => {
    const loadingButtonStatusText = "loading";
    const initialButtonStatusText = "initial";

    const [buttonStatus, setButtonStatus] = useState(initialButtonStatusText);
    const [newTaskContent, setNewTaskContent] = useState<TaskData["content"]>("Zagrać w Wiedźmina");

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        const focusOnInput = () => inputRef.current!.focus();

        event.preventDefault();
        focusOnInput();
        setNewTaskContent("");

        const newTaskContentTrimmed = newTaskContent.trim();
        newTaskContentTrimmed && (
            dispatch(addTask({
                content: newTaskContentTrimmed,
                done: false,
                id: nanoid(),
                important: false,
            }))
        );
    };

    interface InputElement {
        target: HTMLInputElement;
    }

    const onInputChange = ({ target }: InputElement) => setNewTaskContent(newTaskContent => newTaskContent = target.value);

    return (
        <form onSubmit={onFormSubmit}>
            <HeaderPanel
                title="Dodaj nowe zadanie"
                sideContent={
                    <Button
                        type="button"
                        disabled={buttonStatus === loadingButtonStatusText}
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