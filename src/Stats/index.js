import "./style.css";

const Stats = ({ tasks }) => (
    <section className="stats">
        <p className={`stats__item ${tasks.length > 0 ? '' : 'stats__item--hidden'}`}>
            Liczba wszystkich zadań: {tasks.length}</p>
        <p className={`stats__item stats__item--finishedTasks ${tasks.length > 0 ? '' : 'stats__item--hidden'}`}>
            Liczba ukończonych zadań:
            {tasks.filter(({ done }) => done).length}
        </p>
    </section>
);

export default Stats;