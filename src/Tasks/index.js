import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks" >
        {
            tasks.map(({ id, done, content }) => (
                <li key={id} className={`tasks__item ${hideDoneTasks && done ? 'tasks__item--hidden' : ''}`}>
                    <button className="tasks__button tasks__button--done">
                        {done ? "✔" : ""}
                    </button>
                    <p className={`tasks__content ${done ? 'tasks__content--done' : ''}`}>
                        {content}</p>
                    <button className="tasks__button">🗑️</button>
                </li>
            ))
        }
    </ul>
);

export default Tasks;