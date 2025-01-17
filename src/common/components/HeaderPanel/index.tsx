import { Button, ButtonsContainer, Panel } from "./styled";
import { SectionHeader } from "../SectionHeader";
import { ButtonRenderData } from "../../../features/tasks/interfaces/ButtonRenderData";

interface HeaderPanelProps2 {
    title: string;
    buttonsRenderData: ButtonRenderData[];
}

export const HeaderPanel = ({ title, buttonsRenderData }: HeaderPanelProps2) => {

    const renderButtons = () => (
        <ButtonsContainer>
            {
                buttonsRenderData.map(({ clickEventHandler, disabledCondition, content }, index) => (
                    <Button
                        type="button"
                        key={index}
                        onClick={clickEventHandler}
                        disabled={disabledCondition}
                    >
                        {content}
                    </Button>
                ))
            }
        </ButtonsContainer>
    );

    return (
        <Panel>
            <SectionHeader>{title}</SectionHeader>
            {renderButtons()}
        </Panel>
    );
};