import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, removeTasks, toggleTasksDone }) => (
    <ul className="tasks">
        {
            tasks.map(({ id, done, content }) => {
                return (!hideDoneTasks || (hideDoneTasks && !done)) &&
                    (
                        <li key={id} className="tasks__item">
                            <button
                                onClick={() => toggleTasksDone(id)}
                                className="tasks__button tasks__button--done"
                            >
                                {done ? "✔" : ""}
                            </button>
                            <p className={`tasks__content ${done ? 'tasks__content--done' : ''}`}>
                                {content}
                            </p>
                            <button
                                onClick={() => removeTasks(id)}
                                className="tasks__button">
                                🗑️
                            </button>
                        </li>
                    );
            })
        }
    </ul>
);

export default Tasks;