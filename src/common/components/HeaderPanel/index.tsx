import { Button, ButtonsContainer, Panel } from "./styled";
import { SectionHeader } from "../SectionHeader";
import { ButtonRenderData } from "../../aliases/interfaces/ButtonRenderData";

interface HeaderPanelProps {
    title: string;
    buttonsRenderData: ButtonRenderData[];
}

export const HeaderPanel = ({ title, buttonsRenderData }: HeaderPanelProps) => {

    const renderButtons = () => (
        <ButtonsContainer $buttonsLength={buttonsRenderData.length}>
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