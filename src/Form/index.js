import "./style.css";

const Form = () => (
    <form className="form ">
        <header className="form__header">
            Dodaj nowe zadanie
        </header>
        <div className="form__gridContainer">
            <input
                required
                autoFocus
                placeholder="Co jest do zrobienia"
                value="Zagrać w Wiedźmina"
                className="form__input"
                type="text"
                name="newTask"
            />
            <button className="form__button">
                Dodaj zadanie
            </button>
        </div>
    </form>
);

export default Form;