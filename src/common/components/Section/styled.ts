import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.nobel};
    border-radius: 3px;
    box-shadow: 0px 0px 11px -3px ${({ theme }) => theme.colors.lightBlack};
    width: 60%;
    margin-top: 15px;
    padding: 20px;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        width: 100%;
    };
`;