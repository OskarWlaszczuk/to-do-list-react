import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul>
        {
            tasks.map(({ id, done, content }) => {
                if (!hideDoneTasks || (hideDoneTasks && !done)) {
                    return (
                        <li key={id} className="tasks__item">
                            <button className="tasks__button tasks__button--done">
                                {done ? "✔" : ""}
                            </button>
                            <p className={`tasks__content ${done ? 'tasks__content--done' : ''}`}>
                                {content}
                            </p>
                            <button className="tasks__button">🗑️</button>
                        </li>
                    );
                }
                return null; 
            })
        }
    </ul>

);

export default Tasks;