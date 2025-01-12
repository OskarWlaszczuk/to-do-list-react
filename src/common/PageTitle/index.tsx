import { Header } from "../Header";

interface PageTitleProps {
    content: string;
}

export const PageTitle = ({ content }: PageTitleProps) => (
    <Header>
        <h1>{content}</h1>
    </Header>
);