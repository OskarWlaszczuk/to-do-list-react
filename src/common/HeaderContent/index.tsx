import { ReactNode } from "react";
import { Container } from "./styled";
import { SectionHeader } from "../SectionHeader";

interface HeaderContentProps {
    title: string;
    sideContent: ReactNode;
}

export const HeaderContent = ({ title, sideContent }: HeaderContentProps) => (
    <Container>
        <SectionHeader>{title}</SectionHeader>
        {sideContent}
    </Container>
);