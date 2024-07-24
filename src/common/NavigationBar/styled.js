import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Navigation = styled.nav`
    background: rgb(214,192,233);
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

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    margin: 5px;
    flex-basis: 30%; 
    text-align: center;
    border-right: 2px solid rgba(179, 174, 174, 0.742);
    border-left: 2px solid rgba(179, 174, 174, 0.742);
    color: rgb(0 0 0 / 68%);
    text-decoration: none;
    transition: 1.5s;
    padding: 1.8%;
    color: rgb(0 0 0 / 68%);
    text-wrap: nowrap;

    &:hover{
        flex-basis: 40%; 
        background-color: white;
        border: 2px solid rgba(179, 174, 174, 0.742);
        border-radius: 5px;
        font-weight: 500;
    }   

    &.${activeClassName} {
        background-color: white;
        border: 2px solid rgba(179, 174, 174, 0.742);
        border-radius: 5px;
        font-weight: 600;
    };
`;
