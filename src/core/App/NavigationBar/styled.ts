import styled, { css } from "styled-components";
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
    background: linear-gradient(167deg, rgba(214,192,233,1) 31%, rgba(238,226,248,1) 63%);
    width: 100%;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    border-top: none;
    border: 2px solid #8f63b5a6;
    box-shadow: 0px 16px 11px -8px #525251be;
    margin-bottom: 15px;
    padding: 15px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    padding-left: 0px;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakPoints.tabletHorizontal}px){ 
       flex-direction: column;
    };
`;

const activeClassName = "link-active";

const activeAndHoverStyles = css`
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.nobel};
    border-radius: 5px;
    font-weight: 500;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    margin: 5px;
    flex-basis: 30%; 
    text-align: center;
    border-right: 2px solid ${({ theme }) => theme.colors.nobel};
    border-left: 2px solid  ${({ theme }) => theme.colors.nobel};
    text-decoration: none;
    transition: 1s;
    padding: 1.8%;
    color:  ${({ theme }) => theme.colors.lightBlack};

    &:hover{
       ${activeAndHoverStyles}
    }   

    &.${activeClassName} {
        ${activeAndHoverStyles}
        flex-basis: 40%; 
    };
`;
