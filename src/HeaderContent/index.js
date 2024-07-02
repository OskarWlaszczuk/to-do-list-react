import { Container, Header } from "./styled";

const HeaderContent = ({ children }) => (
    <Container>
        <Header className="headerContent__header">
            Lista Zadań
        </Header>
        {children}
    </Container>
);

export default HeaderContent;