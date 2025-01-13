import { Content, ItemWrapper, Item } from "./styled";
import { selectTasks, selectIsTasksListEmpty, selectTasksLength } from "../../tasksSlice";
import { SectionHeader } from "../../../../common/SectionHeader";
import { useAppSelector } from "../../../../reduxTypedHooks";

const Stats = () => {
    const tasks = useAppSelector(selectTasks)
    const tasksLenght = useAppSelector(selectTasksLength)
    const isTasksEmpty = useAppSelector(selectIsTasksListEmpty);

   

    return (
        <>
            {
                !isTasksEmpty && (
                    <Content>
                        <SectionHeader $spaceAround>Dane zadań 📊</SectionHeader>
                        <ItemWrapper>
                            <Item>Liczba wszystkich zadań: <b>{tasksLenght}</b></Item>
                            <Item >
                                Liczba ukończonych zadań: <b>{
                                    ((tasks.filter(({ done }) => done).length / tasksLenght) * 100).toFixed(0)}%
                                </b>
                            </Item>
                            <Item>
                                Liczba ważnych zadań: <b>
                                    {tasks.filter(({ important, done }) => important && !done).length}
                                </b>
                            </Item>
                        </ItemWrapper>
                    </Content>
                )
            }
        </>
    );
};

export default Stats;