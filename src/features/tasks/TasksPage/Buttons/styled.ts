import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    justify-content: space-between;

    @media (max-width:950px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        justify-content: center;
    };
`;

export const Button = styled.button`
    justify-self: end;
    color: ${({theme}) => theme.colors.teal};
    background-color: transparent;
    border: none;
    transition: 0.3s;
    padding: 0px;
    text-wrap: nowrap;
    
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