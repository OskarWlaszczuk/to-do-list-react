import styled from "styled-components";

export const Content = styled.section`
    @media (max-width:${({ theme }) => theme.breakPoints.mobileL}px) {
        margin: auto;
        width: min-content;
    };
`;

export const ItemWrapper = styled.section`
    border-left: 2px solid black;
`;

export const Item = styled.p`
   padding-left: 20px;
   margin: 10px 0;
   text-wrap: nowrap;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileL}px){ 
        padding-left: 10px;
        font-size: smaller;
    };
`;
