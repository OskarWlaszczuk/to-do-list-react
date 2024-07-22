import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
    color: red;
    };
`;
