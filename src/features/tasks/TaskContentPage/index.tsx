import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectTaskById } from "../tasksSlice";
import Section from "../../../common/Section";
import { PageTitle } from "../../../common/PageTitle";
import { NotFound } from "../../../common/NotFound";
import { RootState } from "../store";
import { SectionHeader } from "../../../common/SectionHeader";

export const TaskContentPage = () => {
    const { id } = useParams();
    const task = useSelector((state: RootState) => selectTaskById(state, id));

    return (
        <>
            <PageTitle content="Szczegóły zadania" />
            <Section
                title={
                    task ?
                        <SectionHeader $centered>{task.content}</SectionHeader> :
                        <NotFound content="Nie znaleziono zadania" />
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