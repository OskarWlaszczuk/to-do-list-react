import "./style.css";

const Stats = ({ tasks }) => (
    tasks.length > 0 && (
        <section className="stats">
            <p className="stats__item" >
                Liczba wszystkich zadań: {tasks.length}
            </p>
            <p className="stats__item stats__item--finishedTasks" >
                Liczba ukończonych zadań:
                {tasks.filter(({ done }) => done).length}
            </p>
        </section>

    )
);

export default Stats;