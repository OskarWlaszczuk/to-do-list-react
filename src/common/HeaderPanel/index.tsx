import { Container } from "./styled";
import { SectionHeader } from "../SectionHeader";
import { Button, ButtonsContainer } from "../../features/tasks/TasksPage/Buttons/styled";
import { ButtonRenderData } from "../../features/tasks/TasksPage/interfaces/ButtonRenderData";

// interface HeaderPanelProps {
//     title: string;
//     sideContent: ReactNode;
// }

// export const HeaderPanel = ({ title, sideContent }: HeaderPanelProps) => (
//     <Container>
//         <SectionHeader>{title}</SectionHeader>
//         {sideContent}
//     </Container>
// );

interface HeaderPanelProps2 {
    title: string;
    buttonsRenderData: ButtonRenderData[];
}

export const HeaderPanel2 = ({ title, buttonsRenderData }: HeaderPanelProps2) => {

    const renderButtons = () => (
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
    );

    return (
        <Container>
            <SectionHeader>{title}</SectionHeader>
            <ButtonsContainer>
                {renderButtons()}
            </ButtonsContainer>
        </Container>
    );
};