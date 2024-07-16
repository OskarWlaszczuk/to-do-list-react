import { useSelector } from "react-redux";
import { Content, Item } from "./styled";
import { selectTasks } from "../tasksSlice";

const Stats = () => {
    const { tasks } = useSelector(selectTasks)

    return (tasks.length > 0 && (
        <Content>
            <Item>Liczba wszystkich zadań: {tasks.length}</Item>
            <Item $sumOfFinishedTasks>Liczba ukończonych zadań: {tasks.filter(({ done }) => done).length}</Item>
            <Item $sumOfImportantTasks>Liczba ważnych zadań: {tasks.filter(({ important }) => important).length}</Item>
        </Content>
    ));
};

export default Stats;