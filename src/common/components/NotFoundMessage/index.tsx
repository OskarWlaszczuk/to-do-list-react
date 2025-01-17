import { CenteredParagraph } from "../CenteredParagraph";

interface NotFoundMessageProp {
    content: string;
}

export const NotFoundMessage = ({ content }: NotFoundMessageProp) => (
    <CenteredParagraph $noResults >{content}</CenteredParagraph>
);