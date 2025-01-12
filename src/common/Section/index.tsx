import { ReactElement, ReactNode } from "react";
import { SectionHeader } from "../SectionHeader";
import { Wrapper } from "./styled";

interface SectionProps {
    body: ReactElement;
    title?: ReactNode;
}

const Section = ({ body, title }: SectionProps) => (
    <Wrapper >
        {title && <SectionHeader>{title}</SectionHeader>}
        <article>{body}</article>
    </Wrapper>
);

export default Section;