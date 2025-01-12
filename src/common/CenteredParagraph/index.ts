import styled, { css } from "styled-components";

interface ContentProps {
    $noResults ?: boolean;
}

export const CenteredParagraph = styled.p<ContentProps>`
    text-align: center;

    ${({ $noResults  }) => $noResults  && css`
        font-size: larger;
        font-weight: bold;
        color: crimson;
        margin:   0;
    `}
`;