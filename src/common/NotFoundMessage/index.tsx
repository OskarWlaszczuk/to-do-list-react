import { CenteredParagraph } from "../CenteredParagraph";

interface NotFoundMessageProp {
    content: string;
}

export const NotFoundMessage = ({ content }: NotFoundMessageProp) => (
    <CenteredParagraph $notFound>{content}</CenteredParagraph>
);