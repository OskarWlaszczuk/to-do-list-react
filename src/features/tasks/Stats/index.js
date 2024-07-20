import { useSelector } from "react-redux";
import { Content, ItemWrapper, Item } from "./styled";
import { Header } from "../../../common/HeaderContent/styled"
import { selectTasks, selectIsTasksEmpty } from "../tasksSlice";

const Stats = ({ title }) => {
    const tasks = useSelector(selectTasks)
    const isTasksEmpty = useSelector(selectIsTasksEmpty);

    return (!isTasksEmpty && (
        <Content>
            <Header $stats>{title}</Header>
            <ItemWrapper>
                <Item>Liczba wszystkich zadań: <strong>{tasks.length}</strong></Item>
                <Item >
                    Liczba ukończonych zadań: <strong>{((tasks.filter(({ done }) => done).length / tasks.length) * 100).toFixed(0)}%</strong>
                </Item>
                <Item>
                    Liczba ważnych zadań: <strong>
                        {tasks.filter(({ important, done }) => important && !done).length}
                    </strong>
                </Item>
            </ItemWrapper>
        </Content>
    ));
};

export default Stats;