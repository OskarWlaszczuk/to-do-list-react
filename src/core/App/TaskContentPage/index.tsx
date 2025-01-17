import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectTaskById } from "../../../features/tasks/slices/tasksSlice";
import Section from "../../../common/components/Section";
import { PageTitle } from "../../../common/components/PageTitle";
import { NotFoundMessage } from "../../../common/components/NotFoundMessage";
import { RootState } from "../../store";
import { SectionHeader } from "../../../common/components/SectionHeader";
import { CenteredParagraph } from "../../../common/components/CenteredParagraph";

export const TaskContentPage = () => {
    const { id } = useParams();
    const task = useSelector((state: RootState) => selectTaskById(state, id));

    return (
        <>
            <PageTitle content="Szczegóły zadania" />
            <Section
                title={
                    !!task ?
                        <SectionHeader $centered>{task.content}</SectionHeader> :
                        <NotFoundMessage content="Nie znaleziono zadania" />
                }
                body={
                    <>
                        {task && <CenteredParagraph>Ukończone : <b>{task.done ? "Tak" : "Nie"}</b></CenteredParagraph>}
                    </>
                }
            />
        </>
    );
};