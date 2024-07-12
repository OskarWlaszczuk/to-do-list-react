import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-gap: 10px;
    align-items: center;
    padding: 15px 0px;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 2px solid rgba(179, 174, 174, 0.742);
    padding-top: 0px;
    padding-bottom: 15px;

    @media (max-width:${({ theme }) => theme.breakPoints.smallLaptop}px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    };
`;

export const Header = styled.header`
    font-weight: bold;
    font-size: 20px;

    @media (max-width:${({ theme }) => theme.breakPoints.mobileL}px) {
        justify-self: center;
        text-align: center;
    };
`;