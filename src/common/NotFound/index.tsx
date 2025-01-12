import { Content } from "../Content";

interface NotFoundProp {
    content: string;
}

export const NotFound = ({ content }: NotFoundProp) => (
    <Content $notFound>{content}</Content>
);