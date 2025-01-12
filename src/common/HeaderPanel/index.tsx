import { ReactNode } from "react";
import { Container } from "./styled";
import { SectionHeader } from "../SectionHeader";

interface HeaderPanelProps {
    title: string;
    sideContent: ReactNode;
}

export const HeaderPanel = ({ title, sideContent }: HeaderPanelProps) => (
    <Container>
        <SectionHeader>{title}</SectionHeader>
        {sideContent}
    </Container>
);