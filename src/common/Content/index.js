import styled, { css } from "styled-components";

export const Content = styled.p`
    text-align: center;

    ${({  $notFound }) => $notFound && css`
        font-size: larger;
        font-weight: bold;
        color: crimson;
        margin: 20px 0 0;
    `}
`;