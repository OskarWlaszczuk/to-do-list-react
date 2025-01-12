import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-gap: 10px;
    align-items: baseline;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 2px solid ${({ theme }) => theme.colors.nobel};
    padding-top: 0px;
    padding-bottom: 15px;

    @media (max-width:${({ theme }) => theme.breakPoints.smallLaptop}px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);
    };
`;