import styled from "styled-components";

export const Content = styled.section`
    background-color: white;
    border: 2px solid rgba(179, 174, 174, 0.742);
    border-radius: 3px;
    box-shadow: 0px 0px 11px -3px #525251be;
    width: 60%;
    margin-top: 15px;
    padding: 15px;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        width: 100%;
        padding: 20px;
    };
`;