import { ReactElement, ReactNode } from "react";
import { Header } from "../Header";
import { Wrapper } from "./styled";

interface SectionProps {
    body: ReactElement;
    title?: ReactNode;
}

const Section = ({ body, title }: SectionProps) => (
    <Wrapper >
        <Header>{title}</Header>
        <article>{body}</article>
    </Wrapper>
);

export default Section;