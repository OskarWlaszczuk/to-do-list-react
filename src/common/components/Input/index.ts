import styled from "styled-components";

export const Input = styled.input`
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.nobel};
    border-radius: 5px;
`;

export const SearchInput = styled(Input)`
    transition: 1.5s;
    transform-origin: left;
    width: 65%;

    &:hover {
        width: 85%;
        padding-left: 5%;
    };

    @media (max-width:${({ theme }) => theme.breakPoints.mobileL}px) {
        justify-self: center;
        width: 100%;

        &:hover {
            width: 56%;
            padding-left: 0%;
        };
    };
`;