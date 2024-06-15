import { useState } from "react";
import "./style.css";

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
        <form
            onSubmit={onFormSubmit}
            className="form " >
            <header className="form__header">
                Dodaj nowe zadanie
            </header>
            <div className="form__gridContainer">
                <input
                    value={newTaskContent}
                    onChange={onInputChange}
                    required
                    autoFocus
                    placeholder="Co jest do zrobienia"
                    className="form__input"
                    type="text"
                    name="newTask"
                />
                <button
                    className="form__button"
                    onClick={() => {
                        newTaskContent && (
                            addNewTaskContent(newTaskContent)
                        );
                    }}
                >
                    Dodaj zadanie
                </button>
            </div>
        </form >
    );
};
export default Form;