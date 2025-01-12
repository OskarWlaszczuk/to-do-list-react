import { StyledPageTitle } from "./styled";

interface PageTitleProps {
    content: string;
}

export const PageTitle = ({ content }: PageTitleProps) => (
    <StyledPageTitle>{content}</StyledPageTitle>
);