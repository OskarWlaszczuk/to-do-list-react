import { Container, Header } from "./styled";

const HeaderContent = ({ extraContent, title }) => (
    <Container>
        <Header>
            {title}
        </Header>
        {extraContent}
    </Container>
);

export default HeaderContent;