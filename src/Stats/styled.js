import styled from "styled-components";

export const Content = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 48%);
    justify-content: space-between;
    border-bottom: none;
    margin-top: 15px;

    @media (max-width:${({ theme }) => theme.breakPoints.smallLaptop}px) {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 5%;
        border-bottom: none;
    };
`;

export const Item = styled.p`
    color: white;
    background-color: #488b2f;
    box-shadow: 0px 0px 11px -3px #525251be;
    text-align: center;
    text-decoration: underline;
    text-wrap: nowrap;
    margin: 5px 0;
    padding: 3%;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileL}px){ 
        font-size: smaller;
    };
`;

export const SecondItem = styled(Item)`
    background-color: #46397a;
`;
