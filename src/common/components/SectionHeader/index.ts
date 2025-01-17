import styled, { css } from "styled-components";

interface SectionHeaderProps {
    $spaceAround?: boolean;
    $centered?: boolean;
}

export const SectionHeader = styled.header<SectionHeaderProps>`
    font-weight: bold;
    font-size: 20px;

    @media (max-width:${({ theme }) => theme.breakPoints.mobileL}px) {
        justify-self: center;
        text-align: center;
    };

    ${({ $spaceAround }) => $spaceAround && css`
        margin: 20px 0;
    `};

    ${({ $centered }) => $centered && css`
        text-align: center;
    `};
`;