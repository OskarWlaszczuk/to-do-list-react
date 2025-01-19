import { CenteredParagraph } from "../CenteredParagraph"

interface MessageProps {
    text: string;
    noResults?: boolean;
}

export const Message = ({ text, noResults }: MessageProps) => (
    <CenteredParagraph $noResults={noResults}>{text}</CenteredParagraph>
);