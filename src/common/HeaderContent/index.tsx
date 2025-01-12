import { ReactNode } from "react";
import { Container, Header } from "./styled";

interface HeaderContentProps {
    title: string;
    sideContent: ReactNode;
}

export const HeaderContent = ({ title, sideContent }: HeaderContentProps) => (
    <Container>
        <Header>
            {title}
        </Header>
        {sideContent}
    </Container>
);