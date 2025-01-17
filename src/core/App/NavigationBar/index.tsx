import { Navigation, List, StyledNavLink } from "./styled";

export const NavigationBar = () => {

    const panelItems = [
        { pathname: "/tasks", content: "Lista zadań" },
        { pathname: "/author", content: "Autor" },
    ] as const;

    return (
        <Navigation>
            <List>
                {
                    panelItems.map(({ pathname, content }, index) => (
                        <StyledNavLink key={index} to={pathname}>{content}</StyledNavLink>
                    ))
                }
            </List>
        </Navigation>
    );
};