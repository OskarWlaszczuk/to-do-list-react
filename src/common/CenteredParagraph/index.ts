import styled, { css } from "styled-components";

interface ContentProps {
    $notFound?: boolean;
}

export const CenteredParagraph = styled.p<ContentProps>`
    text-align: center;

    ${({ $notFound }) => $notFound && css`
        font-size: larger;
        font-weight: bold;
        color: crimson;
        margin: 20px 0 0;
    `}
`;