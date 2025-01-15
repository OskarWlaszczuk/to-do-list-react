import { CenteredParagraph } from "../../../../../common/CenteredParagraph"

interface MessageProps {
    text: string;
}

export const Message = ({ text }: MessageProps) => (
    <CenteredParagraph>{text}</CenteredParagraph>
);