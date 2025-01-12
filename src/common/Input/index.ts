import styled, { css } from "styled-components";

interface InputProp {
    $search?: boolean;
}

export const Input = styled.input<InputProp>`
    padding: 10px;
    border: 2px solid rgba(179, 174, 174, 0.742);
    border-radius: 5px;

    ${({ $search }) => $search && css`
        transition: 1.5s;
        transform-origin: left;
        width: 65%;

        @media (max-width:${({ theme }) => theme.breakPoints.mobileL}px) {
            justify-self: center;
            width: 100%;

            &:hover {
                width: 56%;
                padding-left: 0%;
            };
        };

        &:hover {
            width: 85%;
            padding-left: 5%;
        };
    `};
`;