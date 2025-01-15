import { HeaderPanel } from "../../../../common/HeaderPanel"
import { PageTitle } from "../../../../common/PageTitle"
import Section from "../../../../common/Section"
import Form from "../Form"
import { useFormButtonsRenderData } from "../hooks/useFormButtonsRenderData"

export const FormSection = () => {
    const formButtonsRenderData = useFormButtonsRenderData();
    
    return (
        <>
            <PageTitle content={"Lista zadań"} />
            <Section
                title={
                    <HeaderPanel
                        title="Dodaj nowe zadanie"
                        buttonsRenderData={formButtonsRenderData}
                    />
                }
                body={<Form />}
            />
        </>
    )
}