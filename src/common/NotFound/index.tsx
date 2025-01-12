import { CenteredParagraph } from "../CenteredParagraph";

interface NotFoundProp {
    content: string;
}

export const NotFound = ({ content }: NotFoundProp) => (
    <CenteredParagraph $notFound>{content}</CenteredParagraph>
);