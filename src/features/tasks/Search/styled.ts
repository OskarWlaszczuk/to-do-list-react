import styled from "styled-components";

export const Wrapper = styled.div`
    display:grid;
    grid-template-columns: auto 65%;
    justify-items: start;
    justify-content: start;
    grid-gap: 10px;
    margin: 20px 0;
    border-bottom: 3px solid rgba(144, 141, 141, 0.742);
    padding: 20px 0;


    @media (max-width:${({ theme }) => theme.breakPoints.mobileL}px) {
        margin: 20px auto;
        justify-items: center;
        justify-content: space-between;
        grid-gap: 20px;
        grid-template-columns: auto 1fr;
    };
`;

export const Img = styled.img`
    width: 30px;
    height: 30px;
    align-self: center;

    @media (max-width:${({ theme }) => theme.breakPoints.mobileL}px) {
        width: 25px;
        height: 25px;
    };
`;