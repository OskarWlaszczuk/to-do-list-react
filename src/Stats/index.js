import { Content, Item, SecondItem } from "./styled";

const Stats = ({ tasks }) => (
    tasks.length > 0 && (
        <Content>
            <Item>Liczba wszystkich zadań: {tasks.length}</Item>
            <SecondItem>Liczba ukończonych zadań: {tasks.filter(({ done }) => done).length}</SecondItem>
        </Content>

    )
);

export default Stats;