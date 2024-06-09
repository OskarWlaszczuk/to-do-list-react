import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <section className="buttons">
            <button className="buttons__managmentButton">
                {hideDoneTasks && tasks.some(({ done }) => done) ? 'Pokaż' : 'Ukryj'} ukończone
            </button>
            <button
                disabled={tasks.every(({ done }) => done)}
                className="buttons__managmentButton"
            >
                Ukończ wszystkie
            </button>
        </section>
    ));

export default Buttons;