import { Content, Item } from "./styled";

const Stats = ({ tasks }) => (
    tasks.length > 0 && (
        <Content>
            <Item>Liczba wszystkich zadań: {tasks.length}</Item>
            <Item $sumOfFinishedTasks>Liczba ukończonych zadań: {tasks.filter(({ done }) => done).length}</Item>
            <Item $sumOfImportantTasks>Liczba ważnych zadań: {tasks.filter(({ bold }) => bold).length}</Item>
        </Content>

    )
);

export default Stats;