import styled, { css } from "styled-components";

export const Content = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 48%);
    grid-template-rows: repeat(2, auto);
    justify-content: space-between;
    border-bottom: none;
    border-bottom:2px solid rgba(179, 174, 174, 0.742);
    padding: 15px 0;

    @media (max-width:${({ theme }) => theme.breakPoints.smallLaptop}px) {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: repeat(3, 1fr);
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
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileL}px){ 
        font-size: smaller;
    };

    ${({ $sumOfFinishedTasks }) => $sumOfFinishedTasks && css`
        background-color: #46397a;
    `};

    ${({ $sumOfImportantTasks }) => $sumOfImportantTasks && css`
        background-color: indianred;
        
        @media (min-width:${({ theme }) => theme.breakPoints.smallLaptop}px) {
           grid-column: 1/ -1;
           justify-self: center;
           align-self: center;
        };
    `};
`;
