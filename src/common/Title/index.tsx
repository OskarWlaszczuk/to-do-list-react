import { Header } from "../Header";

interface TitleProps {
    content: string;
}

export const Title = ({ content }: TitleProps) => (
    <Header>
        <h1>{content}</h1>
    </Header>
);