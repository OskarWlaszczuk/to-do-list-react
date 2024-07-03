import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 0px;
`;

export const Item = styled.li`
    border-bottom: 3px solid rgba(144, 141, 141, 0.742);
    display: grid;
    padding: 5px 0px;
    grid-template-columns: 50px 1fr 50px;
    transition:
        background 0.3s,
        padding 0.3s,
        font-size 0.3s,
    ;

    @media (max-width:${({ theme }) => theme.breakPoints.mobileM}px) {
        grid-template-columns: 40px 1fr 40px;
    };
`;

export const Button = styled.button`
    border: none;
    color: white;
    padding: 10px;
    border-radius: 3px;
    border: 3px solid #ab0929;
    border-bottom: 10px solid #ab0929;
    background-color: crimson;
    align-self: center;
    min-height: 50px;
    font-size: small;

    @media (max-width:${({ theme }) => theme.breakPoints.mobileM}px) {
        border: none;
        border-top: none;
        min-height: 40px;
        font-size: x-small;
    };

    &:hover {
        background-color: rgb(241, 40, 80);
        transition: 0.2s;
    };    

    &:active{
        border: 3px solid #ab0929;
        border-top: 10px solid #ab0929;

        @media (max-width:${({ theme }) => theme.breakPoints.mobileM}px) {
            border: none;
            border-top: none;
        };
    };
`;

export const ToggleDoneButton = styled(Button)`
    background: green;
    border: 3px solid #0c660c;
    border-bottom: 10px solid #0c660c;

    @media (max-width:${({theme}) => theme.breakPoints.mobileM}px) {
        border: none;
        border-top: none;
        min-height: 40px;
        font-size: x-small;
    };

    &:hover{
        background: rgb(6, 147, 6);
        transition: 0.2s;
    };

    &:active{
        border: 3px solid #0c660c;
        border-top: 10px solid #0c660c;

        @media (max-width:${({ theme }) => theme.breakPoints.mobileM}px) {
            border: none;
            border-top: none;
        };
    };
`;

export const Content = styled.p`
    text-align: center;
    line-height: 1.5;
    padding: 10px;
    padding: 0px 5px;

    ${({ $donedItem }) => $donedItem && css`
        text-decoration: line-through;
        color: rgba(0, 0, 0, 0.682);
    `};
`;