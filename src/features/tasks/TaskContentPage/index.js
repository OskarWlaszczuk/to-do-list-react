import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { selectTaskById } from "../tasksSlice";


export const TaskContentPage = ({ title }) => {
    const { id } = useParams();
    const task = useSelector((state) => selectTaskById(state, id));
    return (
        <>
            <h1>{task ? task.content : "Nie znaleziono❌"}</h1>
            <>
                <p>
                    {task ?
                        <>ID zadania: <strong>{id}</strong></> :
                        <></>
                    }
                </p>
                <p>
                    {task ?
                        <>Ukończone : <strong>{task.done ? "Tak" : "Nie"}</strong></> :
                        <></>
                    }
                </p>
            </>
        </>
    );
};