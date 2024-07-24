import { Header } from "../Header";
import { Wrapper } from "./styled";

const Section = ({ body, title }) => (
    <Wrapper >
        <Header>{title}</Header>
        <article>{body}</article>
    </Wrapper>
);

export default Section;