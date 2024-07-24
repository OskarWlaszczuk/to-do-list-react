import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: white;
    border: 2px solid rgba(179, 174, 174, 0.742);
    border-radius: 3px;
    box-shadow: 0px 0px 11px -3px #525251be;
    width: 60%;
    margin-top: 15px;
    padding: 20px;

    @media (max-width:${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
        width: 100%;
    };
`;