import { useSelector } from "react-redux";
import { Content, ItemWrapper, Item } from "./styled";
import { selectTasks, selectIsTasksListEmpty, selectTasksLength } from "../../tasksSlice";
import { SectionHeader } from "../../../../common/SectionHeader";

const Stats = () => {
    const tasks = useSelector(selectTasks)
    const tasksLenght = useSelector(selectTasksLength)
    const isTasksEmpty = useSelector(selectIsTasksListEmpty);

    return (
        <>
            {
                !isTasksEmpty && (
                    <Content>
                        <SectionHeader $spaceAround>Dane zadań 📊</SectionHeader>
                        <ItemWrapper>
                            <Item>Liczba wszystkich zadań: <strong>{tasksLenght}</strong></Item>
                            <Item >
                                Liczba ukończonych zadań: <strong>{
                                    ((tasks.filter(({ done }) => done).length / tasksLenght) * 100).toFixed(0)}%
                                </strong>
                            </Item>
                            <Item>
                                Liczba ważnych zadań: <strong>
                                    {tasks.filter(({ important, done }) => important && !done).length}
                                </strong>
                            </Item>
                        </ItemWrapper>
                    </Content>
                )
            }
        </>
    );
};

export default Stats;