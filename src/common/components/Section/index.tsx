import { ReactElement, ReactNode } from "react";
import { Wrapper } from "./styled";

interface SectionProps {
    title: ReactNode;
    body: ReactElement;
}

const Section = ({ body, title }: SectionProps) => (
    <Wrapper >
        {title}
        <article>{body}</article>
    </Wrapper>
);

export default Section;