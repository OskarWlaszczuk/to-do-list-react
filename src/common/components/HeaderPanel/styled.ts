import styled from "styled-components";

export const Panel = styled.div`
    display: grid;
    grid-gap: 10px;
    align-items: baseline;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 2px solid ${({ theme }) => theme.colors.nobel};
    padding-top: 0px;
    padding-bottom: 15px;

    @media (max-width:${({ theme }) => theme.breakPoints.mobileXl}px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
        justify-content: center;

    };
`;

interface ButtonsContainerProps {
    $buttonsLength: number;
}

export const ButtonsContainer = styled.section<ButtonsContainerProps>`
    display: grid;
    grid-template-columns:repeat(${({ $buttonsLength }) => $buttonsLength > 1 ? "2" : "1"}, 1fr);
    grid-gap: 10px;
    justify-content: space-between;

    @media (max-width:950px) {
        grid-template-columns: 1fr;
        justify-content: center;
    };
`;

export const Button = styled.button`
    justify-self: end;
    color: ${({ theme }) => theme.colors.teal};
    background-color: transparent;
    border: none;
    transition: 0.3s;
    padding: 0px;
    word-break: break-word;
    
    @media (max-width: ${({ theme }) => theme.breakPoints.smallLaptop}px) {
        justify-self: center;
    };

    &:hover {
        color: rgb(8, 187, 187);
    };

    &:disabled{
        color: #44545a82;
    };
`;