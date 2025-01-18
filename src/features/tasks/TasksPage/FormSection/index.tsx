import { HeaderPanel } from "../../../../common/components/HeaderPanel"
import { PageTitle } from "../../../../common/components/PageTitle"
import Section from "../../../../common/components/Section"
import Form from "./Form"
import { useFormButtonsRenderData } from "./useFormButtonsRenderData"

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
    );
};