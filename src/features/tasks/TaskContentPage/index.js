import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { selectTaskById } from "../tasksSlice";
import Section from "../../../common/Section";
import { Title } from "../../../common/Title";
import { NotFound } from "../../../common/NotFound";

export const TaskContentPage = () => {
    const { id } = useParams();
    const task = useSelector((state) => selectTaskById(state, id));

    return (
        <>
            <Title content="Szczegóły zadania" />
            <Section
                title={
                    task ? task.content : <NotFound content="Nie znaleziono szczegółów zadania" />
                }
                body={
                        <p>
                            {task ?
                                <>Ukończone : <strong>{task.done ? "Tak" : "Nie"}</strong></> :
                                <></>
                            }
                        </p>
                }
            />
        </>
    );
};